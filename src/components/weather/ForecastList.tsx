import { ForecastItem } from '@/types/weather';
import { ForecastCard } from './ForecastCard';

interface ForecastListProps {
  forecasts: ForecastItem[];
}

export function ForecastList({ forecasts }: ForecastListProps) {
  if (!forecasts || forecasts.length === 0) return null;

  return (
    <div className="w-full space-y-4">
      <h2 className="text-2xl font-bold">5-Day Forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {forecasts.map((forecast) => (
          <ForecastCard key={forecast.dt} forecast={forecast} />
        ))}
      </div>
    </div>
  );
}
