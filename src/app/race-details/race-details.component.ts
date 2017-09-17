import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {RaceService} from '../races/race.service';
import { Race } from '../race/race';

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.scss']
})
export class RaceDetailsComponent implements OnInit {
private raceId: string;
private race: Race;

  constructor(private route: ActivatedRoute, private router: Router, private raceService: RaceService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.raceId = params['id'];
    });
    if (this.raceId) {
      this.raceService.getRace(this.raceId)
      .subscribe(data => this.race = data);
    }
  }
  public  goToRaces() {
    this.router.navigate(['/races']);
  }
}
