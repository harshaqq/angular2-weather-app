/*
 * This is simple interface for hourly
 */
export interface Hour {
  date: Date;
  title: string;
  description: string;
  temp: string;
  temp_max: string;
  temp_min: string;
  humidity: string;
  wind_speed: string;
  wind_deg: string;
  icon: string;
}
