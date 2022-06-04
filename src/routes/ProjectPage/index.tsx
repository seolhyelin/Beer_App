import styles from './projectPage.module.scss';

const ProjectPage = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.cardGrid}>
        <a className={styles.card} href='#'>
          <div className={styles.cardBackground} />
          <div className={styles.cardContent}>
            <p className={styles.cardCategory}>Category</p>
            <h3 className={styles.cardHeading}>Example Card Heading</h3>
          </div>
        </a>
        <a className={styles.card} href='#'>
          <div className={styles.cardBackground} />
          <div className={styles.cardContent}>
            <p className={styles.cardCategory}>Category</p>
            <h3 className={styles.cardHeading}>Example Card Heading</h3>
          </div>
        </a>
        <a className={styles.card} href='#'>
          <div className={styles.cardBackground} />
          <div className={styles.cardContent}>
            <p className={styles.cardCategory}>Category</p>
            <h3 className={styles.cardHeading}>Example Card Heading</h3>
          </div>
        </a>
        <a className={styles.card} href='#'>
          <div className={styles.cardBackground} />
          <div className={styles.cardContent}>
            <p className={styles.cardCategory}>Category</p>
            <h3 className={styles.cardHeading}>Example Card Heading</h3>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ProjectPage;
