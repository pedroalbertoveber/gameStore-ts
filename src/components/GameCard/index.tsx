import { UseCheckOutContext } from 'common/CheckOutContext';
import { IGame } from 'interfaces';
import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './GameCard.module.scss';
import { toast } from 'react-toastify';

const GameCard = (props: IGame): ReactElement => {

  const { id, title, smallImgPath, price, console, genre } = props;
  const navigate = useNavigate();
  const { handleAdd } = UseCheckOutContext();

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
          <span>Console{console.length === 1 ? "" : "s"}:</span>
          {console.map(item => <span key={item}> - {item}</span>)}
        </div>
      </figcaption>
      <div className={styles.buttonContainer}>
        <button type='button' className={styles.grocery} onClick={() => {
          handleAdd(props)
          toast.success('Jogo adicionado ao seu carrinho!');
          }}>
          Adicionar ao carrinho
        </button>
        <button type='button' className={styles.knowMore} onClick={() => navigate(`${id}`)}>
          Saber Mais
        </button>
      </div>
    </div>
  );
};

export default GameCard;