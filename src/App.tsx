import { useWeather } from '@/hooks/useWeather';
import { SearchBar } from '@/components/weather/SearchBar';
import { CurrentWeather } from '@/components/weather/CurrentWeather';
import { ForecastList } from '@/components/weather/ForecastList';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, Cloud } from 'lucide-react';
import { APP_NAME } from '@/utils/constants';

function App() {
  const { currentWeather, forecast, isLoading, error, fetchWeather } = useWeather();

  const handleSearch = (city: string) => {
    fetchWeather(city);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <header className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-2">
          {APP_NAME}
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Get current weather and 5-day forecast for any city
        </p>
      </header>

      <main className="container mx-auto px-4 pb-8 space-y-6 max-w-6xl">
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {isLoading && <LoadingSkeleton />}

        {currentWeather && !isLoading && (
          <div className="space-y-6 animate-in fade-in duration-500">
            <CurrentWeather weather={currentWeather} />
            {forecast && <ForecastList forecasts={forecast} />}
          </div>
        )}

        {!currentWeather && !isLoading && !error && (
          <Card className="w-full">
            <CardContent className="flex flex-col items-center justify-center py-16 space-y-4">
              <Cloud className="h-24 w-24 text-gray-300" />
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                  Search for a city to view weather
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Try searching for "London", "New York", or "Tokyo"
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-6 w-32" />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <Skeleton className="h-24 w-24 rounded-full" />
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-6 w-48" />
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
          </div>
        </CardContent>
      </Card>
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <div className="grid grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-40 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
