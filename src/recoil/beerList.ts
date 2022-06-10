import { atom } from 'recoil';

import { IBeerInfoType } from 'types/beer';

export const beerListState = atom<IBeerInfoType[]>({
  key: '#beerListState',
  default: [],
});
