import axios, { AxiosError } from 'axios';
import { config } from '@/config/env';
import { CurrentWeatherResponse, ForecastResponse } from '@/types/weather';
import { API_TIMEOUT } from '@/utils/constants';

const weatherClient = axios.create({
  baseURL: config.apiBaseUrl,
  timeout: API_TIMEOUT,
  params: {
    appid: config.apiKey,
    units: 'metric', // Always fetch in metric
  },
});

// Add response interceptor for error handling
weatherClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 404) {
      throw new Error('City not found. Please check the spelling.');
    }
    if (error.response?.status === 401) {
      throw new Error('Invalid API key configuration.');
    }
    if (error.response?.status === 429) {
      throw new Error('Too many requests. Please try again later.');
    }
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout. Please try again.');
    }
    if (error.code === 'ERR_NETWORK') {
      throw new Error('Unable to connect. Please check your internet connection.');
    }
    throw new Error('Failed to fetch weather data. Please try again.');
  }
);

export const weatherApi = {
  getCurrentWeather: (city: string) =>
    weatherClient.get<CurrentWeatherResponse>('/weather', {
      params: { q: city },
    }),

  getForecast: (city: string) =>
    weatherClient.get<ForecastResponse>('/forecast', {
      params: { q: city },
    }),
};
