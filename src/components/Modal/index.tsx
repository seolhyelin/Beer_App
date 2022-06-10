import { useRef } from 'react';
import { useClickAway } from 'react-use';

import type { IBeerInfoType } from 'types/beer';

import styles from './modal.module.scss';

interface Props {
  setIsOpenModal: Function;
  beerInfo: IBeerInfoType;
}

const Modal = ({ setIsOpenModal, beerInfo }: Props) => {
  const outsideRef = useRef<HTMLInputElement>(null);

  const handleCloseButtonClick = () => {
    setIsOpenModal(false);
  };

  useClickAway(outsideRef, () => {
    setIsOpenModal(false);
  });

  return (
    <div className={styles.backdrop}>
      <div className={styles.modalBox} ref={outsideRef}>
        <div className={styles.test}>
          <p>{beerInfo.name}</p>
          <span>{beerInfo.description}</span>
          <button type='button' onClick={handleCloseButtonClick}>
            닫어
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
