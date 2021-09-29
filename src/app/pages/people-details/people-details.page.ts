import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Person } from '../../interfaces/interface';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.page.html',
  styleUrls: ['./people-details.page.scss'],
})
export class PeopleDetailsPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private api: ApiService) { }

  personId = null;
  person: Person;

  ngOnInit() {
    this.personId = this.activatedRoute.snapshot.paramMap.get('id');

    this.api.getPerson(this.personId)
        .subscribe( res => {
          this.person = res;
        });
  }

}
