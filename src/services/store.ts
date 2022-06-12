import store from 'storejs';

export const FAVORITE_BEER_KEY = 'favoriteBeerList';

export const setLocalStorage = (key: string, value: any) => {
  store.set(key, value);
};

export const getLocalStorage = (key: string) => {
  return store.get(key);
};
