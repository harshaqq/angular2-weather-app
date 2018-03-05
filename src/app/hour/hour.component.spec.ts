import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipe, PipeTransform, DebugElement } from '@angular/core';

import { By } from '@angular/platform-browser';

import { HourComponent } from './hour.component';
import { Hour } from '.././hour';

@Pipe({name: 'date'})
class DatePipeStub implements PipeTransform{
  transform(value: Date): string{
    return 'abc';
  }  
}

describe('HourComponent', () => {
  let component: HourComponent;
  let fixture: ComponentFixture<HourComponent>;
  let hour: Hour = {
    date: new Date(),
    title: 'abc',
    description: 'abc',
    temp: 'abc',
    temp_max: 'abc',
    temp_min: 'abc',
    humidity: 'abc',
    wind_speed: 'abc',
    wind_deg: 'abc',
    icon: 'abc'
  };
  let de: DebugElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourComponent, DatePipeStub ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourComponent);
    component = fixture.componentInstance;
    component.data = hour;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render date', () => {
    de = fixture.debugElement.query(By.css('.date'));
    expect(de.nativeElement.textContent).toContain('abc');
  });

  it('should render title', () => {
    de = fixture.debugElement.query(By.css('.title'));
    expect(de.nativeElement.textContent).toContain('abc');
  });

  it('should render temp', () => {
    de = fixture.debugElement.query(By.css('.temp'));
    expect(de.nativeElement.textContent).toContain('abc');
  });

  it('should render degree symbol', () => {
    de = fixture.debugElement.query(By.css('.temp'));    
    expect(de.nativeElement.textContent).toContain('°');    
  });


  it('should render image', () => {
    de = fixture.debugElement.query(By.css('img'));
    expect(de.nativeElement.src).toContain('abc');
  });
});
