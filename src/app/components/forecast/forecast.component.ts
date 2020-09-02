import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  public forecastWeather: any;

  constructor(public _weatherService: WeatherService) {}

  ngOnInit(): void {
    this._weatherService
      .getCityWeatherForecast(4.60971, -74.08175)
      .subscribe((resp) => {
        this.forecastWeather = resp;
        console.log(resp);
      });
  }
}
