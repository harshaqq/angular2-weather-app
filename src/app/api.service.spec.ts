import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

class HttpClientStub{
  jsonp(url: string, cb: string){
    return Observable.of(new Object());
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

  /* it('should parseData', () => {
   *   
   * });*/

  it('should resolve data', inject([ApiService], (service: ApiService) => {
    service.subscription.subscribe((data)=>{
      expect(data).toEqual({days: []});
    });
  }));

  
  
});
