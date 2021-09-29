import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Person } from '../../interfaces/interface';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  people: Person[] = [];
  cargando = true;


  constructor(private api: ApiService,
              private navController: NavController) { }

  ngOnInit() {

    this.api.getPeople()
        .subscribe( res => {
          this.people = res.results;
          this.cargando = false;
        });
  }


  mostrarDetalle(person){
    const split = person.url.split('/');
    const personId = split[5];
    this.navController.navigateForward(`/tabs/people/${personId}`);
  }

}
