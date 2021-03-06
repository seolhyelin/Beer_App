import { useRecoilState } from 'recoil';
import { useMount } from 'react-use';

import CardBoard from 'components/CardBoard';

import { favoriteState } from 'recoil/beerList';
import { IBeerInfoType } from 'types/beer';
import { FAVORITE_BEER_KEY, getLocalStorage } from 'services/store';

import styles from './favoritePage.module.scss';

const FavoritePage = () => {
  const [favoriteBeerList, setFavoriteBeerList] = useRecoilState<IBeerInfoType[]>(favoriteState);

  useMount(() => {
    setFavoriteBeerList((prev) => {
      const localBeerList = getLocalStorage(FAVORITE_BEER_KEY);
      if (!localBeerList) return prev;

      return localBeerList;
    });
  });

  return (
    <div className={styles.favoriteContainer}>
      <p>My Favorite Beer</p>
      <section className={styles.listBox}>
        <ul>
          {favoriteBeerList?.map((beerInfo) => {
            return (
              <li key={beerInfo.abv}>
                <CardBoard beerInfo={beerInfo} />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default FavoritePage;
