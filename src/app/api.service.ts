import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { TestData } from './test-data';
import { Forecast } from './forecast';
import { Day } from './day';
import { Hour } from './hour';

import { HttpClient } from '@angular/common/http';

/*
 * This is the implementation of api service
 * Its main responsibilty is to handle server calls and parsing the response
 */
@Injectable()
export class ApiService {

  public subscription: BehaviorSubject<Forecast> = new BehaviorSubject<Forecast>({ days: new Array<Day>() });

  /* These are hardcoded values, if component provides these parameters then it's not required */
  private country: string = 'IN';
  private city: string = 'Bengaluru';
  private apiKey: string = '5da121ed237dd74a8f5ed3d5dfe60f52';
  private url: string = `https://api.openweathermap.org/data/2.5/forecast?q=${this.city},${this.country}&appid=${this.apiKey}&callback=JSONP_CALLBACK`;

  constructor(private http: HttpClient){    }

  /* 
   * Calls api and gets the data
   */
  get(): void{
    /* let _data = Object.assign({}, TestData);
     * let data: Forecast = this.parseData(_data.list);*/
    this.http.jsonp(this.url, 'callback').subscribe((data: any)=>{
      /* console.log(data); */
      let _data: Forecast = this.parseData(data.list);
      this.subscription.next(_data);     
    });
  }

  /* 
   * This method parses data received from api to Forecast interface structure
   * @param data List of forecasted data
   * @return The parsed data
   */
  private parseData(data: Array<any>): Forecast{
    let forecast: Forecast = { days: new Array<Day>() };
    let day: Day;
    data.forEach((item, i) => {
      /* 
       * Initially it creates day object
       * Checks whether current is same as old one, this is to convert list to two dimension array each element will have data for a day
       */
      if (i === 0) {
        day = { hours: new Array<Hour>(), date: new Date(item.dt_txt) };	
      } else if (new Date(data[i].dt_txt).getDate() !== new Date(data[i - 1].dt_txt).getDate()) {
	/* Push to forecast days */
        forecast.days.push(day);
        day = { hours: new Array<Hour>(), date: new Date(item.dt_txt) };
      }
      /* 
       * Create hour object
       */
      let hour: Hour = {
        date: new Date(item.dt_txt),
        title: item.weather[0].main,
        description: item.weather[0].description,
        temp: item.main.temp,
        humidity: item.main.humidity,
        wind_speed: item.wind.speed,
        wind_deg: item.wind.deg,
        temp_max: item.main.temp_max,
        temp_min: item.main.temp_min,
        icon: `http://openweathermap.org/img/w/${item.weather[0].icon}.png`
      };
      day.hours.push(hour);
    });
    if (day) {
      forecast.days.push(day);
    }
    return forecast;
  }
  

}
