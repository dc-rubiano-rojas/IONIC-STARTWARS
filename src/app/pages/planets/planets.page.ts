import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Planet, Planets } from '../../interfaces/interface';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  planetas: Observable<Planets>;



  constructor(private api: ApiService,
              private router: Router) { }

  ngOnInit() {

    this.planetas = this.api.getPlanets();


  }


  irDetalle(planet){
    const split = planet.url.split('/');
    const planetId = split[5];
    this.router.navigateByUrl(`tabs/planets/${planetId}`);
  }

}
