import { async, fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, Input, DebugElement, Injectable } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ForecastComponent } from './forecast.component';
import { ApiService } from '.././api.service';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Day } from '.././day';
import { Forecast } from '.././forecast';

@Injectable()
export class ApiServiceStub{

  public data: Forecast = { days: new Array<Day>() };   
  public subscription: BehaviorSubject<string> = new BehaviorSubject<string>(this.data);
  
  get(){
    return this.subscription.next(this.data);
  }  
}


@Component({
  selector: 'app-day',
  template: '<p class="test">{{data}}</p>'
})

class DayComponentStub{
  @Input() data: string;
}

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;
  let apiStub: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastComponent, DayComponentStub ],
      providers: [
	{ provide: ApiService, useClass: ApiServiceStub }
      ]      
    }).overrideComponent(ForecastComponent, {
      set: {
	providers: [
	  { provide: ApiService, useClass: ApiServiceStub }
	]
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    apiStub = TestBed.get(ApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should resolve data', fakeAsync(() => {
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.forecast).toEqual({ days: new Array<Day>() });
  }));
  
});
