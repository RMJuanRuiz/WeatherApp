import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  public daysForecastArray: [];

  constructor(public _weatherService: WeatherService) { }

  ngOnInit(): void {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    this._weatherService
      .getCityWeatherForecast(4.60971, -74.08175)
      .subscribe((resp) => {
        const next3Days = resp['daily'].slice(1, 4);

        this.daysForecastArray = next3Days.map((day: any, index: number) => {
          let dayForecast: {
            day: string;
            maxTemp: number;
            minTemp: number;
            weather: string;
            weatherIcon: string;
          };

          dayForecast = {
            day: days[new Date().getDay() + (index + 1)],
            maxTemp: Math.round(day.temp.max),
            minTemp: Math.round(day.temp.min),
            weather: day.weather[0].main,
            weatherIcon: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
          };

          return dayForecast;
        });

      });
  }
}
