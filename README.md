# Weather Forecast Application

A modern weather forecast application built with React, TypeScript, Tailwind CSS, and Shadcn UI. Search for any city to view current weather conditions and a 5-day forecast.

## Features

- 🌤️ **Current Weather**: View real-time weather conditions including temperature, humidity, wind speed, and pressure
- 📅 **5-Day Forecast**: See daily weather predictions with temperature ranges
- 🎨 **Weather Icons**: Visual weather icons that match current conditions
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🎯 **Type-Safe**: Built with TypeScript for enhanced code quality
- ⚡ **Fast**: Powered by Vite for lightning-fast development and builds
- ♿ **Accessible**: Follows accessibility best practices

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - High-quality, accessible component library
- **Axios** - HTTP client for API requests
- **date-fns** - Modern JavaScript date utility library
- **Lucide React** - Beautiful icon library
- **OpenWeatherMap API** - Weather data provider
- **Vitest** - Unit testing framework

## Setup Instructions

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v8.0.0 or higher)
- OpenWeatherMap API key

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd weather-app-interview
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

   Then edit the `.env` file and add your OpenWeatherMap API key:
   ```
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

   **Note**: To get an API key, sign up at [OpenWeatherMap](https://openweathermap.org/api) for free.

4. **Start the development server**:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Format code with Prettier
- `npm run test` - Run unit tests with Vitest

## Project Structure

```
src/
├── components/
│   ├── ui/                    # Shadcn UI components
│   │   ├── alert.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── skeleton.tsx
│   └── weather/               # Weather-specific components
│       ├── CurrentWeather.tsx
│       ├── ForecastCard.tsx
│       ├── ForecastList.tsx
│       ├── SearchBar.tsx
│       └── WeatherIcon.tsx
├── config/
│   └── env.ts                 # Environment configuration
├── hooks/
│   └── useWeather.ts          # Weather data fetching hook
├── lib/
│   └── utils.ts               # Utility functions
├── services/
│   ├── storage.ts             # LocalStorage utilities
│   └── weatherApi.ts          # OpenWeatherMap API client
├── types/
│   └── weather.ts             # TypeScript type definitions
├── utils/
│   ├── constants.ts           # Application constants
│   └── formatters.ts          # Data formatting utilities
├── App.tsx                    # Main application component
├── main.tsx                   # Application entry point
└── index.css                  # Global styles
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_OPENWEATHER_API_KEY` | Your OpenWeatherMap API key | Yes |

## Usage

1. **Search for a city**: Type a city name in the search bar and press Enter or click the Search button
2. **View current weather**: See temperature, weather description, humidity, wind speed, and pressure
3. **Check forecast**: Scroll down to view the 5-day weather forecast
4. **Try different cities**: Search for any city worldwide to get weather information

### Example Cities to Try

- London
- New York
- Tokyo
- Paris
- Sydney
- Dubai
- Singapore

## API Integration

This application uses the [OpenWeatherMap API](https://openweathermap.org/api):

- **Current Weather Endpoint**: `GET /weather?q={city}&appid={key}&units=metric`
- **5-Day Forecast Endpoint**: `GET /forecast?q={city}&appid={key}&units=metric`

The app automatically handles:
- API rate limiting
- Network errors
- Invalid city names
- Request timeouts

## Error Handling

The application provides user-friendly error messages for common scenarios:

- **City not found**: "City not found. Please check the spelling."
- **Network error**: "Unable to connect. Please check your internet connection."
- **API timeout**: "Request timeout. Please try again."
- **Invalid API key**: "Invalid API key configuration."

## Testing

Run the test suite:

```bash
npm run test
```

The project includes unit tests for:
- Utility functions (temperature formatting, date formatting)
- Data transformations
- Component behavior

## Building for Production

1. **Create production build**:
   ```bash
   npm run build
   ```

2. **Preview production build**:
   ```bash
   npm run preview
   ```

3. **Deploy**: The `dist/` folder contains the production-ready static files that can be deployed to any static hosting service (Vercel, Netlify, GitHub Pages, etc.)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

Potential features for future iterations:
- Temperature unit toggle (Celsius/Fahrenheit)
- Recent search history with localStorage
- Geolocation "Use My Location" feature
- Dark mode toggle
- Weather alerts
- Hourly forecast
- Multiple city comparison
- Weather maps

## License

MIT

## Acknowledgments

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/)
- Icons by [Lucide](https://lucide.dev/)
- UI components by [Shadcn UI](https://ui.shadcn.com/)
