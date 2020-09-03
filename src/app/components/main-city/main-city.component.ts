import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-main-city',
  templateUrl: './main-city.component.html',
  styleUrls: ['./main-city.component.scss'],
})
export class MainCityComponent implements OnInit {
  public cityTemp: number;
  public weather: string;
  public weatherURL: string;

  constructor(public _weatherService: WeatherService) { }

  private getIconURL = (id) => {
    return `http://openweathermap.org/img/wn/${id}@2x.png`;
  };

  ngOnInit(): void {
    this._weatherService
      .getCityWeather(4.60971, -74.08175)
      .subscribe((resp) => {
        this.cityTemp = Math.round(resp['main'].temp);
        this.weather = resp['weather'][0].main;
        this.weatherURL = this.getIconURL(resp['weather'][0].icon);
      });
  }
}
