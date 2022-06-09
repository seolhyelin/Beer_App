import styles from './cardBoard.module.scss';

import type { IBeerInfoType } from 'types/beer';

interface Props {
  beerInfo: IBeerInfoType;
}

const CardBoard = ({ beerInfo }: Props) => {
  return (
    <section className={styles.projectContainer}>
      <div className={styles.projectGrid}>
        <div key={`${beerInfo.id}`} className={styles.projectCard}>
          <div
            className={styles.projectGIF}
            style={{
              backgroundImage: `url(${beerInfo.image_url})`,
            }}
          />
          <div className={styles.contentContainer}>
            <p className={styles.contentCategory}>ABV {beerInfo.abv}</p>
            <h3 className={styles.contentHead}>{beerInfo.name}</h3>
            <span>{beerInfo.tagline}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardBoard;
