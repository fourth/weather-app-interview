import { ForecastItem } from '@/types/weather';
import { Card, CardContent } from '@/components/ui/card';
import { WeatherIcon } from './WeatherIcon';
import { formatForecastDate, formatTemperature, capitalizeFirstLetter } from '@/utils/formatters';

interface ForecastCardProps {
  forecast: ForecastItem;
}

export function ForecastCard({ forecast }: ForecastCardProps) {
  const mainWeather = forecast.weather[0];
  if (!mainWeather) return null;

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4 flex flex-col items-center text-center space-y-3">
        <div className="font-semibold text-lg">{formatForecastDate(forecast.dt)}</div>
        <WeatherIcon iconCode={mainWeather.icon} size={48} className="text-primary" />
        <div className="space-y-1">
          <div className="text-sm font-medium">
            {formatTemperature(forecast.main.temp_max)} /{' '}
            {formatTemperature(forecast.main.temp_min)}
          </div>
          <div className="text-xs text-muted-foreground">
            {capitalizeFirstLetter(mainWeather.description)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
