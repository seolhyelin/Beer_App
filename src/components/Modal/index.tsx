/* eslint-disable camelcase */
import { useRef } from 'react';
import { useClickAway } from 'react-use';
import { useRecoilState } from 'recoil';

import { favoriteState } from 'recoil/beerList';
import type { IBeerInfoType } from 'types/beer';
import { FAVORITE_BEER_KEY, setLocalStorage } from 'services/store';

import { BookMark } from 'assets/svg';

import styles from './modal.module.scss';

interface Props {
  setIsOpenModal: Function;
  beer: IBeerInfoType;
}

const Modal = ({ setIsOpenModal, beer }: Props) => {
  const { name, abv, description, first_brewed, brewers_tips, image_url } = beer;
  const [favoriteBeerList, setFavoriteBeerList] = useRecoilState(favoriteState);

  const isFavorite = () => {
    return favoriteBeerList.find((item) => item.name === name);
  };

  const addBeer = () => {
    const newFavorite = isFavorite() ? favoriteBeerList : [...favoriteBeerList, beer];

    setFavoriteBeerList(newFavorite);
    setLocalStorage(FAVORITE_BEER_KEY, newFavorite);
  };

  const deleteBeer = () => {
    const newFavorite = favoriteBeerList.filter((item) => item.name !== name);

    setFavoriteBeerList(newFavorite);
    setLocalStorage(FAVORITE_BEER_KEY, newFavorite);
  };

  const handleFavoriteButton = (e: { currentTarget: { className: string } }) => {
    const { className } = e.currentTarget;

    if (className === 'onBookmark') {
      addBeer();
    } else if (className === 'offBookmark') {
      deleteBeer();
    }
  };

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
            <button
              type='button'
              className={isFavorite() ? 'offBookmark' : 'onBookmark'}
              onClick={handleFavoriteButton}
            >
              {isFavorite() ? <BookMark className={styles.offBookmark} /> : <BookMark className={styles.onBookmark} />}
            </button>
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
