import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseUrl: string = 'https://api.openweathermap.org/data/2.5';
  private appid: string = 'e4e291867db1b85d203011a59a2303f5';

  constructor(private readonly _http: HttpClient) { }

  public getCityWeather(lat: number, lon: number) {
    const params = new HttpParams()
      .set('appid', this.appid)
      .set('units', 'metric')
      .set('lat', lat.toString())
      .set('lon', lon.toString());

    return this._http.get(`${this.baseUrl}/weather`, { params });
  }

  public getCityWeatherForecast(lat: number, lon: number) {
    const params = new HttpParams()
      .set('appid', this.appid)
      .set('exclude', 'current,minutely,hourly')
      .set('units', 'metric')
      .set('lat', lat.toString())
      .set('lon', lon.toString());

    return this._http.get(`${this.baseUrl}/onecall`, { params });
  }
}