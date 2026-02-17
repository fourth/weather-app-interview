import { useState } from 'react';
import { CurrentWeatherResponse, ForecastItem } from '@/types/weather';
import { weatherApi } from '@/services/weatherApi';
import { filterDailyForecast } from '@/utils/formatters';

interface WeatherState {
  currentWeather: CurrentWeatherResponse | null;
  forecast: ForecastItem[] | null;
  isLoading: boolean;
  error: string | null;
}

export function useWeather() {
  const [state, setState] = useState<WeatherState>({
    currentWeather: null,
    forecast: null,
    isLoading: false,
    error: null,
  });

  const fetchWeather = async (city: string) => {
    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const [currentRes, forecastRes] = await Promise.all([
        weatherApi.getCurrentWeather(city),
        weatherApi.getForecast(city),
      ]);

      // Filter forecast to daily (one per day)
      const dailyForecast = filterDailyForecast(forecastRes.data.list);

      setState({
        currentWeather: currentRes.data,
        forecast: dailyForecast,
        isLoading: false,
        error: null,
      });
    } catch (err) {
      setState({
        currentWeather: null,
        forecast: null,
        isLoading: false,
        error: err instanceof Error ? err.message : 'An unknown error occurred',
      });
    }
  };

  return { ...state, fetchWeather };
}
