import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component, Input, DebugElement } from '@angular/core';

import { DayComponent } from './day.component';

import { By } from '@angular/platform-browser';

import { Day } from '.././day';
import { Hour } from '.././hour';

import { HourComponent } from '.././hour/hour.component';

@Component({
  selector: 'app-hour',
  template: '<div></div>'
})

class HourComponentStub{
  @Input() data: any;
}

describe('DayComponent', () => {
  let component: DayComponent;
  let fixture: ComponentFixture<DayComponent>;
  let data: Day = {date: new Date(), hours: new Array<Day>()};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayComponent,  HourComponentStub ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayComponent);
    component = fixture.componentInstance;
    component.data = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
