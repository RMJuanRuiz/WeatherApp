import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-main-city',
  templateUrl: './main-city.component.html',
  styleUrls: ['./main-city.component.scss'],
})
export class MainCityComponent implements OnInit {
  public cityTemp: string;
  public weather: string;
  public weatherURL: string;

  constructor(public _weatherService: WeatherService) {}

  private getIconURL = (id) => {
    return `http://openweathermap.org/img/wn/${id}@2x.png`;
  };

  ngOnInit(): void {
    this._weatherService
      .getCityWeather(4.60971, -74.08175)
      .subscribe((resp) => {
        this.cityTemp = resp['main'].temp;
        this.weather = resp['weather'][0].main;

        switch (this.weather) {
          case 'Thunderstorm':
            this.weatherURL = this.getIconURL('11d');
            break;

          case 'Drizzle':
            this.weatherURL = this.getIconURL('09d');
            break;

          case 'Rain':
            this.weatherURL = this.getIconURL('10d');
            break;

          case 'Snow':
            this.weatherURL = this.getIconURL('13d');
            break;

          case 'Clear':
            this.weatherURL = this.getIconURL('01d');
            break;

          case 'Clouds':
            this.weatherURL = this.getIconURL('02d');
            break;

          default:
            this.weatherURL = this.getIconURL('50d');
            break;
        }
      });
  }
}
