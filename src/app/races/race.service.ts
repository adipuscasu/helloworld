import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Race } from '../race/race';
import { map } from 'rxjs/operators';

@Injectable()
export class RaceService {

  constructor(private http: Http) { }

  getRaces() {
    return this.http.get('assets/races.json')
          .pipe(map(response => <Race[]>response.json().racesData));
  }
  getRace(raceId: string) {
    return this.getRaces()
    .pipe(map( races => races.find( race => race.id.toString() === raceId)));
  }
}
