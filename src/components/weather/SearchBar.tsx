import { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Loader2 } from 'lucide-react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

export function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();

    if (trimmedValue.length >= 2) {
      onSearch(trimmedValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-2xl mx-auto">
      <Input
        type="text"
        placeholder="Search for a city..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        disabled={isLoading}
        className="flex-1"
        aria-label="City search input"
      />
      <Button type="submit" disabled={isLoading || inputValue.trim().length < 2}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Searching...
          </>
        ) : (
          <>
            <Search className="mr-2 h-4 w-4" />
            Search
          </>
        )}
      </Button>
    </form>
  );
}
