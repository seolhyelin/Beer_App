import { useState } from 'react';

import { useRecoilValue, useRecoilState } from 'recoil';
import { IBeerInfoType } from 'types/beer';

import { beerListState, favoriteState } from 'recoil/beerList';

function useFavoriteList() {
  const [isShowing, setIsShowing] = useState(false);
  const beerList = useRecoilValue(beerListState);
  const [favoriteList, setFavoriteList] = useRecoilState(favoriteState);
  const [currentBeer, setCurrentBeer] = useState('');

  const addFavoriteList = () => {
    const currentSelectedBeer = beerList.find((beer) => beer.name === currentBeer) as IBeerInfoType;
    const updateFavorite = favoriteList.concat(currentSelectedBeer);
    setFavoriteList(updateFavorite);

    const local = JSON.parse(localStorage.getItem('favoriteList') as string);
    if (!local) localStorage.setItem('favoriteList', JSON.stringify(updateFavorite));
    else {
      const newLocal = local.concat(currentSelectedBeer);
      localStorage.setItem('favoriteList', JSON.stringify(newLocal()));
    }
    setIsShowing(!isShowing);
  };

  const deleteFavoriteList = () => {
    const local = JSON.parse(localStorage.getItem('favoriteList') as string);
    const after = local.filter((el: IBeerInfoType) => el.name !== currentBeer);

    setFavoriteList(after);
    localStorage.setItem('favoriteList', JSON.stringify(after));
    setIsShowing(!isShowing);
  };

  return <div>gkgk</div>;
}
export default useFavoriteList;
