/* eslint-disable no-promise-executor-return */
import { useState, useRef } from 'react';
import { useQuery } from 'react-query';
import { getBeerAPI } from 'services/beer';
import { useInView } from 'react-intersection-observer';

import CardBoard from 'components/CardBoard';
import Loader from 'components/Loader';

import { useRecoilState } from 'recoil';
import { beerListState } from 'recoil/beerList';

import type { IBeerInfoType } from 'types/beer';

import { Search } from 'assets/svg';
import styles from './listPage.module.scss';

const ListPage = () => {
  const [beerList, setBeerList] = useRecoilState(beerListState);
  const [page, setPage] = useState(1);

  const [ref, inView] = useInView();

  const { data, isLoading } = useQuery(['beerListAPI', page], () =>
    getBeerAPI({ page }).then((res) => {
      return res.data;
    })
  );

  return (
    <div className={styles.listContainer}>
      <section className={styles.searchBox}>
        <label htmlFor='beer'>Search your Beer !</label>
        <div className={styles.searchBar}>
          <input id='beer' placeholder='Search Beer' />
          <button type='button'>
            <Search className={styles.searchIcon} />
          </button>
        </div>
      </section>
      <section className={styles.listBox}>
        <ul>
          {data?.map((beerInfo) => {
            return (
              <li key={`${beerInfo.id}-${beerInfo.name}`}>
                <CardBoard beerInfo={beerInfo} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default ListPage;
