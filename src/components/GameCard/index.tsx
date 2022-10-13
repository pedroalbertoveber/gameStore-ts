import { IGame } from 'interfaces';
import React, { ReactElement } from 'react';
import styles from './GameCard.module.scss';

const GameCard = (props: IGame): ReactElement => {

  const { id, title, description, smallImgPath, price, console, genre } = props;

  return (
    <div className={styles.gameCardContainer}>
      <figure>
        <img src={smallImgPath} alt={title} />
      </figure>
      <figcaption>
        <div className={styles.title}>
          <h4>{title}</h4>
        </div>
        <div className={styles.price}>
          <span>Preço:</span>
          <span>R${price.toFixed(2)}</span>
        </div>
        <div className={styles.genre}>
          <span>Gênero:</span>
          <span>{genre}</span>
        </div>
        <div className={styles.console}>
          <span>Console(s):</span>
          {console.map(item => <span> - {item}</span>)}
        </div>
      </figcaption>
      <div className={styles.buttonContainer}>
        <button type='button' className={styles.grocery}>
          Adicionar ao carrinho
        </button>
        <button type='button' className={styles.knowMore}>
          Saber Mais
        </button>
      </div>
    </div>
  );
};

export default GameCard;