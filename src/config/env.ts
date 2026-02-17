export const config = {
  apiKey: import.meta.env.VITE_OPENWEATHER_API_KEY || '',
  apiBaseUrl: 'https://api.openweathermap.org/data/2.5',
} as const;

export function validateConfig() {
  if (!config.apiKey) {
    throw new Error('Missing VITE_OPENWEATHER_API_KEY environment variable');
  }
}
