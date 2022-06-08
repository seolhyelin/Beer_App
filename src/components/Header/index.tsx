import styles from './header.module.scss';

const Header = () => {
  return (
    <header>
      <button type='button' className={styles.headerButton}>
        Home
      </button>
      <button type='button' className={styles.headerButton}>
        Favorite
      </button>
    </header>
  );
};

export default Header;
