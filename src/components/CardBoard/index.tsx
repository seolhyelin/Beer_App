import styles from './cardBoard.module.scss';

import type { IBeerInfoType } from 'types/beer';

interface Props {
  beerInfo: IBeerInfoType;
}

const CardBoard = ({ beerInfo }: Props) => {
  return (
    <article>
      <p>{beerInfo.name}</p>
      <p>{beerInfo.description}</p>
      <img src={beerInfo.image_url} width='200px' alt='test' />
    </article>
  );
};

export default CardBoard;
