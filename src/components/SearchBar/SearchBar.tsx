import s from "./SearchBar.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

interface SearchFormProps {
  onSearch: (searchTerm: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evt.target.value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className={s.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}
