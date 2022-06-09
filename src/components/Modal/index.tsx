import { useRef } from 'react';
import { useClickAway } from 'react-use';
import styles from './modal.module.scss';

interface Props {
  setIsOpenModal: Function;
}

const Modal = ({ setIsOpenModal }: Props) => {
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
        <p>맥주 정보</p>
        <button type='button' onClick={handleCloseButtonClick}>
          닫어
        </button>
      </div>
    </div>
  );
};

export default Modal;
