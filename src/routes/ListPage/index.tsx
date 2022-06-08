import { useQuery } from 'react-query';
import { getBeerAPI } from 'services/beer';

import styles from './listPage.module.scss';

const page = 1;

const ListPage = () => {
  const { data } = useQuery(['beerListAPI', page], () => getBeerAPI({ page }).then((res) => console.log(res)));

  return <div>ListPage</div>;
};

export default ListPage;
