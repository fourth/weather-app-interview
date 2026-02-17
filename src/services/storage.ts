// LocalStorage utilities for future recent searches feature
const RECENT_SEARCHES_KEY = 'weather_recent_searches';

export const storageService = {
  getRecentSearches(): string[] {
    try {
      const data = localStorage.getItem(RECENT_SEARCHES_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveRecentSearches(searches: string[]): void {
    try {
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(searches));
    } catch (err) {
      console.error('Failed to save recent searches:', err);
    }
  },

  clearRecentSearches(): void {
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  },
};
