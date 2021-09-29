import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peliculas, People, Person, Planets, Planet, Pelicula } from '../interfaces/interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get<Peliculas>('https://swapi.dev/api/films');
  }
  getFilm(id){
    return this.http.get<Pelicula>(`https://swapi.dev/api/films/${id}`);
  }


  getPeople(){
    return this.http.get<People>('https://swapi.dev/api/people');
  }
  getPerson(id){
    return this.http.get<Person>(`https://swapi.dev/api/people/${id}`);
  }


  getPlanets(){
    return this.http.get<Planets>('https://swapi.dev/api/planets');
  }
  getPlanet(id){
    return this.http.get<Planet>(`https://swapi.dev/api/planets/${id}`);
  }

}
