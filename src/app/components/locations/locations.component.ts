import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  public parisWeather: any;
  public lyonWeather: any;

  constructor(public _weatherService: WeatherService) {}

  ngOnInit(): void {
    this._weatherService.getCityWeather(48.85341, 2.3488).subscribe((resp) => {
      this.parisWeather = resp;
      console.log(resp);
    });

    this._weatherService.getCityWeather(45.74846, 4.84671).subscribe((resp) => {
      this.lyonWeather = resp;
      console.log(resp);
    });
  }
}
