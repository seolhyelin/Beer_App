import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header>
      <NavLink to='/' className={styles.headerButton}>
        Home
      </NavLink>
      <NavLink to='list' className={styles.headerButton}>
        Beer List
      </NavLink>
      <NavLink to='favorite' className={styles.headerButton}>
        Favorite
      </NavLink>
    </header>
  );
};

export default Header;
