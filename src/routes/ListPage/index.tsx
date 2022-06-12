/* eslint-disable no-promise-executor-return */
import { useState, useRef } from 'react';
import { useQuery } from 'react-query';
import { getBeerAPI } from 'services/beer';

import { Search } from 'assets/svg';

import CardBoard from 'components/CardBoard';
import ModalPortal from 'components/Modal/ModalPortal';
import Modal from 'components/Modal';

import { useRecoilState } from 'recoil';
import { beerListState } from 'recoil/beerList';

import styles from './listPage.module.scss';

import type { IBeerInfoType } from 'types/beer';

const page = 1;

const ListPage = () => {
  const [beerList, setBeerList] = useRecoilState(beerListState);
  const [listPage, setListPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const targetRef = useRef(null);

  const { data } = useQuery(['beerListAPI', page], () =>
    getBeerAPI({ page }).then((res) => {
      return res.data;
    })
  );

  const getMoreList = async () => {
    setIsLoaded(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    const newListPage = listPage + 1;

    const params = {
      page: newListPage,
    };

    // const {
    //   data: { data },
    // } = await getBeerAPI(params);
  };

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
