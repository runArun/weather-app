import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './root/app.component';
import {WeatherListComponent} from './weather/weather-list.component';
import {WeatherItemComponent} from './weather/weather-item.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    WeatherItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
