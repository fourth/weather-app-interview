import { CurrentWeatherResponse } from '@/types/weather';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WeatherIcon } from './WeatherIcon';
import { formatTemperature, capitalizeFirstLetter } from '@/utils/formatters';
import { Droplets, Wind, Gauge } from 'lucide-react';

interface CurrentWeatherProps {
  weather: CurrentWeatherResponse;
}

export function CurrentWeather({ weather }: CurrentWeatherProps) {
  const mainWeather = weather.weather[0];
  if (!mainWeather) return null;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>
            {weather.name}, {weather.sys.country}
          </span>
          <Badge variant="secondary">{new Date().toLocaleDateString()}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Display */}
        <div className="flex flex-col items-center space-y-4">
          <WeatherIcon iconCode={mainWeather.icon} size={96} className="text-primary" />
          <div className="text-center">
            <div className="text-5xl font-bold">{formatTemperature(weather.main.temp)}</div>
            <div className="text-xl text-muted-foreground mt-2">
              {capitalizeFirstLetter(mainWeather.description)}
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Feels like {formatTemperature(weather.main.feels_like)}
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t">
          <div className="flex items-center gap-3">
            <Droplets className="h-5 w-5 text-blue-500" />
            <div>
              <div className="text-sm text-muted-foreground">Humidity</div>
              <div className="font-semibold">{weather.main.humidity}%</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Wind className="h-5 w-5 text-blue-500" />
            <div>
              <div className="text-sm text-muted-foreground">Wind Speed</div>
              <div className="font-semibold">{weather.wind.speed} m/s</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Gauge className="h-5 w-5 text-blue-500" />
            <div>
              <div className="text-sm text-muted-foreground">Pressure</div>
              <div className="font-semibold">{weather.main.pressure} hPa</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
