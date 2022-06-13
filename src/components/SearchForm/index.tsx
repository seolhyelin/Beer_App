import { Search } from 'assets/svg';

import styles from './searchForm.module.scss';

const SearchForm = () => {
  return (
    <section className={styles.searchBox}>
      <label htmlFor='beer'>Search your Beer !</label>
      <div className={styles.searchBar}>
        <input id='beer' placeholder='Search Beer' />
        <button type='button'>
          <Search className={styles.searchIcon} />
        </button>
      </div>
    </section>
  );
};

export default SearchForm;
