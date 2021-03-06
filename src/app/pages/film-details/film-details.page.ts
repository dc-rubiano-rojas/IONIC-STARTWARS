import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmailComposer } from '@ionic-native/email-composer/ngx';

import { FavoriteService } from '../../services/favorite.service';
import { ApiService } from '../../services/api.service';



@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {

  filmId = null;
  film: any;
  isFavorite = false;

  constructor(private activatedRoute: ActivatedRoute,
              private api: ApiService,
              private emailComposer: EmailComposer,
              private favoriteService: FavoriteService) { }

  ngOnInit() {
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');

    this.api.getFilm(this.filmId).subscribe(res => {
      this.film = res;
    });

    this.favoriteService.isFavorite(this.filmId).then(isFav => {
      this.isFavorite = isFav;
    });
  }


  unfavoriteFilm(){
    this.favoriteService.unfavoriteFilm(this.filmId).then(() => {
      this.isFavorite = false;
    });
  }

  favoriteFilm(){
    this.favoriteService.favoriteFilm(this.filmId).then(() => {
      this.isFavorite = true;
    });
  }



  shareFilm(){
    const email = {
      to: 'dcrubiano01@gmail.com',
      subject: 'I love this one: ' + this.film.title,
      body: 'Can you remember the opening?<br><br>\"' + this.film.opening_crawl + '\"',
      isHtml: true
    };

    // Send a text message using default options
    this.emailComposer.open(email);
  }


 

}
