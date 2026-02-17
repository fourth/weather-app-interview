import { describe, it, expect } from 'vitest';
import { formatTemperature, capitalizeFirstLetter, formatForecastDate } from './formatters';

describe('formatTemperature', () => {
  it('should format temperature with degree symbol and C', () => {
    expect(formatTemperature(20.5)).toBe('21°C');
    expect(formatTemperature(15.3)).toBe('15°C');
    expect(formatTemperature(-5.8)).toBe('-6°C');
  });

  it('should round temperature to nearest integer', () => {
    expect(formatTemperature(20.4)).toBe('20°C');
    expect(formatTemperature(20.6)).toBe('21°C');
  });
});

describe('capitalizeFirstLetter', () => {
  it('should capitalize first letter of string', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
    expect(capitalizeFirstLetter('world')).toBe('World');
  });

  it('should handle single character strings', () => {
    expect(capitalizeFirstLetter('a')).toBe('A');
  });

  it('should handle empty strings', () => {
    expect(capitalizeFirstLetter('')).toBe('');
  });
});

describe('formatForecastDate', () => {
  it('should format unix timestamp to day name', () => {
    // 1609459200 = Friday, January 1, 2021 12:00:00 AM GMT
    const result = formatForecastDate(1609459200);
    expect(result).toBe('Friday');
  });
});
