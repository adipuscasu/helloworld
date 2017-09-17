import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Race } from '../race/race';
import 'rxjs/add/operator/map';

@Injectable()
export class RaceService {
private races: Race[];

  constructor(private http: Http) { }

  getRaces() {
    return this.http.get('assets/races.json')
          .map(response => <Race[]>response.json().racesData);
  }
  getRace(raceId: string) {
    return this.getRaces()
    .map( races => races.find( race => race.id.toString() === raceId));
  }
}