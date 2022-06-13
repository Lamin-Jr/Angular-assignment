import { IWeather } from "./weather.interface";

export interface ICountryModel {
    name?: string;
    weather?: IWeather;
    base?: string;
    country?: string;
    temperatureData: {
        temp?: number;
        feels_like?: number;
        temp_min?: number;
        temp_max?: number;
        pressure?: number;
        humidity?: number;
    }

}