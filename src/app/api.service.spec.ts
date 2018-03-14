import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Day } from './day';
import { Forecast } from './forecast';

import { TestData } from './test-data';

class HttpClientStub{
  jsonp(url: string, cb: string){
    return Observable.of({days: new Array<Day>()});
  }  
}


describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
	ApiService,
	{ provide: HttpClient, useClass: HttpClientStub }
      ]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should parse data', inject([ApiService], (service: ApiService) => {
    let data: Forecast = service.parseData(TestData['list']);
    expect(data.days[0].hours[0].icon).toContain('http://openweathermap.org');
  }));  

  it('should resolve data', inject([ApiService], (service: ApiService) => {
    service.subscription.subscribe((data)=>{
      expect(data).toEqual({days: []});
    });
  }));

  
  
});
