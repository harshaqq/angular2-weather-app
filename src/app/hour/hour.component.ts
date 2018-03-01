import { Component, OnInit, Input } from '@angular/core';

import { Hour } from '.././hour';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css']
})

/* 
 * This is the implementaton of hour component
 * It's responsibilty is to render hour forecast data
 */
export class HourComponent{
  
  /* 
   * This is the input for this component, parent should pass Hour object
   */
  @Input() data: Hour;
  
}
