import { Component, OnInit, Input } from '@angular/core';

import { Day } from '.././day';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})

/* 
 * This is implementation of day component
 * It's responsibilty is to render day forecast data (i.e. Will iterate hour component)
 */
export class DayComponent{

  /* 
   * This is the input for this component, parent should pass Day object
   */
  @Input() data: Day;

}
