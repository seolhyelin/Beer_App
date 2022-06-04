import { useRef } from 'react';
import { useClickAway } from 'react-use';

import styles from './modal.module.scss';

interface Props {
  setIsOpenModal: Function;
}

const Modal = ({ setIsOpenModal }: Props) => {
  const outsideRef = useRef<HTMLInputElement>(null);

  const handleCloseButton = () => {
    setIsOpenModal(false);
  };

  useClickAway(outsideRef, () => {
    setIsOpenModal(false);
  });

  return (
    <div className={styles.container}>
      <div className={styles.layeredModal} ref={outsideRef}>
        <main className={styles.modal}>modal</main>
      </div>
    </div>
  );
};

export default Modal;
