import styles from './particles.module.scss';

const ParticlesEffect = () => {
  return (
    <>
      <div className={styles.pageBackground} />
      <div className={styles.animationWrapper}>
        <div className={`${styles.particle} ${styles.particle1}`} />
        <div className={`${styles.particle} ${styles.particle2}`} />
        <div className={`${styles.particle} ${styles.particle3}`} />
        <div className={`${styles.particle} ${styles.particle4}`} />
      </div>
    </>
  );
};

export default ParticlesEffect;
