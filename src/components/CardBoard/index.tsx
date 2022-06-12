import { useState } from 'react';

import type { IBeerInfoType } from 'types/beer';
import ModalPortal from 'components/Modal/ModalPortal';
import Modal from 'components/Modal';

import styles from './cardBoard.module.scss';

interface Props {
  beerInfo: IBeerInfoType;
}

const CardBoard = ({ beerInfo }: Props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <ModalPortal>{isOpenModal && <Modal setIsOpenModal={handleModal} beer={beerInfo} />}</ModalPortal>
      <div key={`${beerInfo.id}`} className={styles.projectCard} onClick={handleModal} role='presentation'>
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
    </>
  );
};

export default CardBoard;
