import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { HourComponent } from './hour/hour.component';
import { ForecastComponent } from './forecast/forecast.component';


@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    HourComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
