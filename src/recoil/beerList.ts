import { atom } from 'recoil';

import { IBeerInfoType } from 'types/beer';

export const beerListState = atom<IBeerInfoType[]>({
  key: '#beerListState',
  default: [],
});

export const favoriteState = atom<IBeerInfoType[]>({
  key: '#favoriteState',
  default: [],
});
