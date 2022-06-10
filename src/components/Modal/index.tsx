/* eslint-disable camelcase */
import { useRef } from 'react';
import { useClickAway } from 'react-use';

import type { IBeerInfoType } from 'types/beer';

import styles from './modal.module.scss';

interface Props {
  setIsOpenModal: Function;
  beerInfo: IBeerInfoType;
}

const Modal = ({ setIsOpenModal, beerInfo }: Props) => {
  const { name, abv, description, first_brewed, brewers_tips, image_url } = beerInfo;
  const outsideRef = useRef<HTMLInputElement>(null);

  const handleCloseButtonClick = () => {
    setIsOpenModal(false);
  };

  useClickAway(outsideRef, () => {
    setIsOpenModal(false);
  });

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalBox} ref={outsideRef}>
        <div className={styles.modalInfo}>
          <div className={styles.imageBox}>
            <img src={image_url} alt='beerImage' />
          </div>
          <div className={styles.infoBox}>
            <p className={styles.pointText}>{name}</p>
            <p className={styles.descriptionText}>ABV {abv}</p>
            <p className={styles.descriptionText}>BREWED {first_brewed}</p>
            <p className={styles.pointText}>Description</p>
            <span className={styles.descriptionText}>{description}</span>
            <p className={styles.pointText}>Tips</p>
            <span className={styles.descriptionText}>{brewers_tips}</span>
          </div>
          <button type='button' onClick={handleCloseButtonClick}>
            닫어
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
