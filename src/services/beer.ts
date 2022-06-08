import axios from 'axios';
import { IBeerInfoType } from 'types/beer';

const url = 'https://api.punkapi.com/v2/beers';

interface BeerParams {
  page?: number;
  beer_name?: string;
}

export const getBeerAPI = (params: BeerParams) =>
  axios.get<IBeerInfoType>(url, { params: { ...params, per_page: 10 } });

// https://api.punkapi.com/v2/beers?per_page=10&page={항상 변함}
//  export const searchBeerAPI = (params: BeerParams) =>
//   axios.get<>(url, { params: {  ...params } })
