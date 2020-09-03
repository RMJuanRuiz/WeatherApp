import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {
  public citiesWeather = [];

  constructor(public _weatherService: WeatherService) { }

  ngOnInit(): void {
    this._weatherService.getCityWeather(45.74846, 4.84671).subscribe((resp) => {
      this.populateCities(resp);
    });

    this._weatherService.getCityWeather(48.85341, 2.3488).subscribe((resp) => {
      this.populateCities(resp);
    });

  }

  private populateCities(city: any) {
    let finalCity = {
      name: city['name'],
      weather: city['weather'][0].main,
      temp: Math.round(city['main'].temp),
      iconURL: `http://openweathermap.org/img/wn/${city['weather'][0].icon}@2x.png`,
      humidity: city['main'].humidity
    }

    this.citiesWeather.push(finalCity);
  }

  public showAlert() {
    alert('Coming soon! :)');
  }
}