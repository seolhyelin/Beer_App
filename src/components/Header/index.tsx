import { Link } from 'react-router-dom';
import styles from './header.module.scss';

import Button from 'components/Button';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/'>
        <Button>Home</Button>
      </Link>
      <Link to='list'>
        <Button>Beer List</Button>
      </Link>
      <Link to='favorite'>
        <Button>Favorite</Button>
      </Link>
    </header>
  );
};

export default Header;
