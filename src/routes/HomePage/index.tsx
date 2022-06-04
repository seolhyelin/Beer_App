import styles from './homePage.module.scss';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main>
      <section className={styles.mainTitle}>
        <span>H</span>
        <span>Y</span>
        <span>E</span>
        <span>R</span>
        <span>I</span>
        <span>N</span>
      </section>
      <section className={styles.searchContainer}>
        <div className={styles.searchInput} />
      </section>

      <section className={styles.categoryContainer}>
        <Link to='/about'>
          <div className={styles.categoryBox}>
            <div className={styles.categoryIcon} />
            <p className={styles.categoryText}>hyerin</p>
          </div>
        </Link>
        <Link to='/skills'>
          <div className={styles.categoryBox}>
            <div className={styles.categoryIcon} />
            <p className={styles.categoryText}>skills</p>
          </div>
        </Link>
        <Link to='/carrer'>
          <div className={styles.categoryBox}>
            <div className={styles.categoryIcon} />
            <p className={styles.categoryText}>career</p>
          </div>
        </Link>
        <Link to='/projects'>
          <div className={styles.categoryBox}>
            <div className={styles.categoryIcon} />
            <p className={styles.categoryText}>projects</p>
          </div>
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
