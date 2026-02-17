import { format, fromUnixTime } from 'date-fns';
import { ForecastItem } from '@/types/weather';

export function formatForecastDate(unixTimestamp: number): string {
  return format(fromUnixTime(unixTimestamp), 'EEEE');
}

export function formatTime(unixTimestamp: number): string {
  return format(fromUnixTime(unixTimestamp), 'h:mm a');
}

export function formatTemperature(temp: number): string {
  return `${Math.round(temp)}°C`;
}

export function filterDailyForecast(forecastList: ForecastItem[]): ForecastItem[] {
  const dailyMap = new Map<string, ForecastItem>();

  forecastList.forEach((item) => {
    const date = format(fromUnixTime(item.dt), 'yyyy-MM-dd');
    const hour = fromUnixTime(item.dt).getHours();

    // Prefer 12:00 PM readings
    if (hour >= 11 && hour <= 14) {
      if (!dailyMap.has(date) || hour === 12) {
        dailyMap.set(date, item);
      }
    } else if (!dailyMap.has(date)) {
      dailyMap.set(date, item);
    }
  });

  return Array.from(dailyMap.values()).slice(0, 5);
}

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
