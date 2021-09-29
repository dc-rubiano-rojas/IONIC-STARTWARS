import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Planet } from '../../interfaces/interface';

@Component({
  selector: 'app-planets-details',
  templateUrl: './planets-details.page.html',
  styleUrls: ['./planets-details.page.scss'],
})
export class PlanetsDetailsPage implements OnInit {

  id = null;
  planet: Planet;

  constructor(private activateRoute: ActivatedRoute,
              private api: ApiService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.api.getPlanet(this.id)
        .subscribe( res => {
          this.planet = res;
        });
  }

}
