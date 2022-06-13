/* eslint-disable no-promise-executor-return */
import { useState, useRef, useEffect } from 'react';
import { useQuery } from 'react-query';
import { getBeerAPI } from 'services/beer';
import { useInView } from 'react-intersection-observer';

import CardBoard from 'components/CardBoard';
import Loader from 'components/Loader';
import SearchForm from 'components/SearchForm';

import { useRecoilState } from 'recoil';
import { beerListState } from 'recoil/beerList';

import type { IBeerInfoType } from 'types/beer';

import styles from './listPage.module.scss';

const ListPage = () => {
  const [beerList, setBeerList] = useRecoilState(beerListState);
  const [page, setPage] = useState(1);

  const [ref, inView] = useInView();

  const { isLoading } = useQuery(
    ['beerListAPI', page],
    () =>
      getBeerAPI({ page }).then((res) => {
        return res.data;
      }),
    {
      // eslint-disable-next-line @typescript-eslint/no-shadow
      onSuccess: (data: IBeerInfoType[]) => {
        const updateBeerList = beerList.concat(data);
        setBeerList(updateBeerList);
        ref(null);
      },
    }
  );

  useEffect(() => {
    if (inView) {
      console.log(page);
      setPage((prev) => prev + 1);
    }
  }, [inView, setPage]);
  console.log(beerList);
  return (
    <div className={styles.listContainer}>
      <SearchForm />
      <section className={styles.listBox}>
        <ul>
          {beerList?.map((beerInfo) => {
            return (
              <li key={`${beerInfo.id}-${beerInfo.name}`}>
                <CardBoard beerInfo={beerInfo} />
              </li>
            );
          })}
        </ul>
      </section>
      {isLoading && <Loader />}
      {beerList.length !== 0 && <div ref={ref} />}
    </div>
  );
};

export default ListPage;
