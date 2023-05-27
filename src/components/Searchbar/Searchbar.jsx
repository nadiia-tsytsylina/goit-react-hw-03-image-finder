import css from './Searchbar.module.css';
import { TbPhotoSearch } from 'react-icons/tb';

export default function Searchbar({ onSubmit }) {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onSubmit}>
        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <button type="submit" className={css.SearchFormButton}>
          <TbPhotoSearch className={css.Icon}></TbPhotoSearch>
        </button>
      </form>
    </header>
  );
}
