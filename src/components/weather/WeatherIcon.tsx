import {
  Sun,
  Moon,
  CloudSun,
  CloudMoon,
  Cloud,
  Cloudy,
  CloudDrizzle,
  CloudRain,
  CloudLightning,
  Snowflake,
  CloudFog,
  LucideIcon,
} from 'lucide-react';

interface WeatherIconProps {
  iconCode: string;
  size?: number;
  className?: string;
}

const iconMap: Record<string, LucideIcon> = {
  '01d': Sun,
  '01n': Moon,
  '02d': CloudSun,
  '02n': CloudMoon,
  '03d': Cloud,
  '03n': Cloud,
  '04d': Cloudy,
  '04n': Cloudy,
  '09d': CloudDrizzle,
  '09n': CloudDrizzle,
  '10d': CloudRain,
  '10n': CloudRain,
  '11d': CloudLightning,
  '11n': CloudLightning,
  '13d': Snowflake,
  '13n': Snowflake,
  '50d': CloudFog,
  '50n': CloudFog,
};

export function WeatherIcon({ iconCode, size = 64, className = '' }: WeatherIconProps) {
  const IconComponent = iconMap[iconCode] || Cloud;

  return <IconComponent size={size} className={className} />;
}
