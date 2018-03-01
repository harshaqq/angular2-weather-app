import { Hour } from './hour';
/*
 * This is simple interface for day forecast
 */
export interface Day {
  hours: Array<Hour>;
  date: Date;
}
