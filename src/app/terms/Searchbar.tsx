import React, { useState, ChangeEvent } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

interface SearchInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => (
  <input
    className={styles.navbarSearchBox}
    type="text"
    placeholder="Pesquise dentro do termo..."
    value={value}
    onChange={onChange}
  />
);

interface SearchSuggestionProps {
  suggestion: string;
  searchTerm: string;
  onClick: (suggestion: string) => void;
}

const SearchSuggestion: React.FC<SearchSuggestionProps> = ({
  suggestion,
  searchTerm,
  onClick,
}) => {
  const display =
    searchTerm === '' || suggestion.toLowerCase().includes(searchTerm.toLowerCase())
      ? ''
      : 'none';

  return (
    <li style={{ display }} onClick={() => onClick(suggestion)}>
      {suggestion}
    </li>
  );
};

export const Searchbar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const lowercaseTerm = event.target.value.toLowerCase();
    setSearchTerm(lowercaseTerm);
  };

  const handleSuggestionClick = (suggestion: string) => {
    const formattedSuggestion = suggestion.replace(/\s+/g, '');
    window.location.href = `/terms#${formattedSuggestion}`;
  };

  const suggestions = ['Nossos Valores', 'Gratuidade', 'Perfis', 'LGPD'];

  return (
    <>
      <div className={styles.navbarBoxSearch}>
        <form className={styles.navbarSearch}>
          <Image
            src="/img/terms/tabler_search.png"
            width={10.37}
            height={10.37}
            alt="search"
          />

          <SearchInput value={searchTerm} onChange={handleInputChange} />
        </form>

        {searchTerm && (
          <ul className={styles.navbarAutocomplete}>
            {suggestions.map((suggestion) => (
              <SearchSuggestion
                key={suggestion}
                suggestion={suggestion}
                searchTerm={searchTerm}
                onClick={handleSuggestionClick}
              />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
