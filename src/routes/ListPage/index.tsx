import { useQuery } from 'react-query';
import { getBeerAPI } from 'services/beer';

import styles from './listPage.module.scss';

import { Search } from 'assets/svg';

const page = 1;

const ListPage = () => {
  const { data } = useQuery(['beerListAPI', page], () =>
    getBeerAPI({ page }).then((res) => {
      return res.data;
    })
  );

  return (
    <div className={styles.listContainer}>
      <section className={styles.searchBox}>
        <label htmlFor='beer'>Search your Beer !</label>
        <div className={styles.searchBar}>
          <input id='beer' placeholder='gpgp' />
          <button type='button'>
            <Search className={styles.searchIcon} />
          </button>
        </div>
      </section>
      <section className={styles.listBox}>
        <ul>
          {data?.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </section>
    </div>
  );
};

export default ListPage;
