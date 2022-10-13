import React, { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import games from 'data/games.json';
import styles from './GameInfo.module.scss';
import Return from 'components/Return';

const GameInfo = ():ReactElement => {

  const { id } = useParams();
  const selectedGame = games.find(item => item.id === Number(id));

  const { title, description, price, genre, console, largeImgPath } = selectedGame!;

  return (
    <section className={styles.section}>
      <Return />
      <div className={styles.gameContainer}>
        <figure>
          <img src={largeImgPath} alt={title} />
        </figure>
        <figcaption>
          <div className={styles.title}>
            <h2>{title}</h2>
          </div>
          <div className={styles.description}>
            <strong>Descrição: </strong>
            <span>{description}</span>
          </div>
          <div className={styles.genre}>
            <strong>Gênero: </strong>
            <span>{genre}</span>
          </div>
          <div className={styles.price}>
            <strong>Valor: </strong>
            <span>R$ {price.toFixed(2)}</span>
          </div>
          <div className={styles.console}>
            <strong>Console{console.length === 1 ? "" : "s"}: </strong>
            <span>{console.map(item => <span>- {item}</span>)}</span>
          </div>
        </figcaption>
        <div className={styles.buttonContainer}>
          <button type='button'>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </section>
  );
};

export default GameInfo;