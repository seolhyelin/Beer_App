interface IBeerInfoType {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: IBoilVolumeType;
  boil_volume: IBoilVolumeType;
  method: IMethodType;
  ingredients: IngredientsType;
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

// interface ISearch extends IBeerInfoType {
//   search: IBeerInfoType[];
//   totalResult: number;
//   response: boolean;
// }

interface IBoilVolumeType {
  value: number;
  unit: string;
}

interface IngredientsType {
  malt: IMaltType[];
  hops: IHopType[];
  yeast: string;
}

interface IHopType {
  name: string;
  amount: IBoilVolumeType;
  add: string;
  attribute: string;
}

interface IMaltType {
  name: string;
  amount: IBoilVolumeType;
}

interface IMethodType {
  mash_temp: IMashTempType[];
  fermentation: IFermentationType;
  twist: null;
}

interface IFermentationType {
  temp: IBoilVolumeType;
}

interface IMashTempType {
  temp: IBoilVolumeType;
  duration: number;
}

export { IBeerInfoType };
