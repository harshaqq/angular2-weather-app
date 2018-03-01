import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '.././api.service';

import { Forecast } from '.././forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
  providers: [ ApiService ]
})

/* 
 * This is the implementation of forecast component
 * It's main responsibilty is to render forecast days
 * @param api ApiService
 */
export class ForecastComponent implements OnInit, OnDestroy {

  /* 
   * This variable holds the forecast data
   * This gets updated via service subscription
   */
  public forecast: Forecast;

  /* 
   * Subscription 
   */
  private subscription;

  constructor(private api: ApiService) { }

  /* 
   * It's a component lifecycle hook
   * Here we are subscribing to service, when service publishes the data 
   */
  ngOnInit() {
    this.subscription = this.api.subscription.subscribe((data) => {
      console.log(data);
      this.forecast = data;
    });
    this.api.get();
  }

  /* 
   * It's component lifecycle hook, triggers when component destroys
   * Here we are unsubscribing from the service
   */
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }  

}
