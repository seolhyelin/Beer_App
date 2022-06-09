import { useState } from 'react';
import { useQuery } from 'react-query';
import { getBeerAPI } from 'services/beer';

import { Search } from 'assets/svg';

import CardBoard from 'components/CardBoard';
import ModalPortal from 'components/Modal/ModalPortal';
import Modal from 'components/Modal';

import styles from './listPage.module.scss';

const page = 1;

const ListPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { data } = useQuery(['beerListAPI', page], () =>
    getBeerAPI({ page }).then((res) => {
      return res.data;
    })
  );

  const handleModal = () => {
    setIsOpenModal(true);
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
      <ModalPortal>{isOpenModal && <Modal setIsOpenModal={setIsOpenModal} />}</ModalPortal>
      <section className={styles.listBox}>
        <ul>
          {data?.map((beerInfo) => {
            return (
              <li key={`${beerInfo.id}-${beerInfo.name}`} onClick={handleModal} role='presentation'>
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
