export interface IWeatherCurrent {
  name?: string;
  weather?: IWeather[];
  base?: string;
  main?: {
    temp?: number;
    feels_like?: number;
    temp_min?: number;
    temp_max?: number;
    pressure?: number;
    humidity?: number;
  };
  sys?: {
    country?: string;
    id?: number;
    sunrise?: number;
    sunset?: number;
    type?: number;
  };
  flag?: string
}

export interface IWeather {
  id?: number;
  main?: string;
  description?: string;
  icon?: string;
}

export interface ICities {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };
  flag?: string;
}
