import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { RaceComponent } from './race/race.component';
import { RacesComponent } from './races/races.component';
import {RaceService} from './races/race.service';
import { RaceDetailsComponent } from './race-details/race-details.component';


@NgModule({
  declarations: [
    AppComponent,
    RaceComponent,
    RacesComponent,
    RaceDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'races', pathMatch: 'full'},
      {path: 'races', component: RacesComponent},
      {path: 'races/:id', component: RaceDetailsComponent}
    ])
  ],
  providers: [RaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
