import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { PlacesComponent } from './components/places/places.component';
import { LocationsComponent } from './components/locations/locations.component';
import { MainCityComponent } from './components/main-city/main-city.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    PlacesComponent,
    LocationsComponent,
    MainCityComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
