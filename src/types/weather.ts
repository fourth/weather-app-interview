export interface Coordinates {
  lat: number;
  lon: number;
}

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface CurrentWeatherResponse {
  coord: Coordinates;
  weather: WeatherCondition[];
  main: MainWeatherData;
  wind: Wind;
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  name: string;
  timezone: number;
}

export interface ForecastItem {
  dt: number;
  main: MainWeatherData;
  weather: WeatherCondition[];
  wind: Wind;
  dt_txt: string;
}

export interface ForecastResponse {
  list: ForecastItem[];
  city: {
    name: string;
    country: string;
    coord: Coordinates;
    timezone: number;
  };
}

export interface WeatherError {
  message: string;
  code?: string;
}
