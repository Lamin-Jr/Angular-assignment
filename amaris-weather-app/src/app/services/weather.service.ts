import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICities, IWeatherCurrent } from './interfaces/weather.interface';

interface IWeather {
  name: string;
}
interface ILocation {
  latitude: number;
  longitude: number;
}

@Injectable()
export class WeatherService {
  constructor(protected http: HttpClient) { }
  apid = '7412b52c9ab23daf5348097b9f9a9195';
  protected yourLocations: ILocation = { latitude: 0, longitude: 0 };

  cities = (name?: string) => {
    return new Observable((observer) => {
      this.http.get('../../assets/city.list .json').subscribe((apiRes) => {

        let searched = (apiRes as unknown as ICities[]).filter(
          (cities) => cities.name.toLowerCase() === name?.toLocaleLowerCase()
        ).map(cityFlags=>{
          let getFlag = this.getCountryFlag(cityFlags.country);
          return ({...cityFlags, flag: getFlag})
        });
        observer.next(searched);
      });
    });
  };

  loadCountry(name?: string) {
    return new Observable((weatherData) => {
      if (name) {
        this.cities(name).subscribe((data) => {
          let coordData = data as unknown as ICities[];

          if (coordData[0]) {
            let hasWeather = this.http
              .get<IWeatherCurrent>(
                `https://api.openweathermap.org/data/2.5/weather?lat=${coordData?.[0]?.coord.lat}&lon=${coordData?.[0]?.coord.lon}&appid=${this.apid}`
              )
              .subscribe((cityRes) => weatherData.next(cityRes));
          }
        });
      } else {
        this.gpsLocation().subscribe((resLocation) => {
          let location = resLocation as unknown as ILocation;

          if (
            this.yourLocations.latitude !== 0 &&
            this.yourLocations.longitude !== 0
          ) {
            console.log('General Loca', this.yourLocations);
          }
          let hasWeather = this.http
            .get<IWeatherCurrent>(
              `https://api.openweathermap.org/data/2.5/weather?lat=${location?.latitude}&lon=${location.longitude}&appid=${this.apid}`
            )
            .subscribe((gpsRes) => weatherData.next(gpsRes));
        });
      }
    });
  }
  getCountryFlag(counrty: string) {
    return `https://countryflagsapi.com/png/${counrty}`
  }

  getSeletectedCountry(location: ILocation) {

    return new Observable(observer => {
      if (location.latitude && location.longitude) {
        let hasWeather = this.http
          .get<IWeatherCurrent>(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location?.latitude}&lon=${location.longitude}&appid=${this.apid}`
          )
          .subscribe((gpsRes) => {
            let rawData = gpsRes
            observer.next(gpsRes)
          });
      }
    })
  }

  getCountryByName(name: string) {
    return this.http.get<IWeather>('');
  }

  gpsLocation() {
    return new Observable((resolve) => {
      navigator.geolocation.getCurrentPosition((response) => {
        resolve.next({
          longitude: response.coords.longitude,
          latitude: response.coords.latitude,
        });
        this.yourLocations = {
          longitude: response.coords.longitude,
          latitude: response.coords.latitude,
        };
      });
    });
  }
}
