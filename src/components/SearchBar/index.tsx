import { type ChangeEvent, useState } from 'react';

import './search-bar.scss';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [input, setInput] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Query"
        value={input}
        onChange={handleChange}
        className="search-bar__input"
      />
    </div>
  );
}

export default SearchBar;
