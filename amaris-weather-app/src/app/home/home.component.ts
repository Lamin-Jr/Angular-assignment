import { Component, OnInit } from '@angular/core';
import {
  ICities,
  IWeatherCurrent,
} from '../services/interfaces/weather.interface';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  cities: ICities[] = [];
  weatherInfo: IWeatherCurrent  = {};
  cityInfo!: IWeatherCurrent;

  constructor(protected Weather: WeatherService) {
  }

  ngOnInit() {
    console.log(Object.keys(this.weatherInfo))

    this.Weather.loadCountry().subscribe((data) => {
      let weatherData = data as unknown as IWeatherCurrent;
      if (weatherData) {
        this.weatherInfo = weatherData;
        this.cityInfo = weatherData;
        console.log(this.cityInfo)
      }
    });
  }

  onSearch(event: any) {

    this.Weather.cities(event.target.value).subscribe((cityData) => {
      let weatherData = cityData as unknown as ICities[];
      this.cities = weatherData;
    });
  }

  get isDataAvailable(): boolean {
    return Object.keys(this.weatherInfo).length > 0 ? true : false;
  }

  onSelectedCity (cities: ICities){
    let {lon,lat} = cities?.coord
    
    this.Weather.getSeletectedCountry({latitude: lat, longitude: lon}).subscribe(citySelected => {
      this.cityInfo = citySelected as unknown as IWeatherCurrent;
      console.log(this.cityInfo)
    })
  }
}
