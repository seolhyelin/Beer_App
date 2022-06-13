import { useState, FormEvent, ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

import { beerListState } from 'recoil/beerList';

import { Search } from 'assets/svg';

import styles from './searchForm.module.scss';
import { useResetRecoilState } from 'recoil';

const SearchForm = () => {
  const [searchWord, setSearchWord] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const resetBeerList = useResetRecoilState(beerListState);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentSearch = searchParams.get('beer_name');

    if (currentSearch === searchWord) return;

    resetBeerList();
    setSearchParams({ beer_name: searchWord });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.currentTarget.value);
  };

  return (
    <form className={styles.searchBox} onSubmit={handleSearch}>
      <label htmlFor='beer'>Search your Beer !</label>
      <div className={styles.searchBar}>
        <input id='beer' placeholder='Search Beer' onChange={handleChange} />
        <button type='button'>
          <Search className={styles.searchIcon} />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
