import React, { ReactElement } from 'react';
import { IGame } from 'interfaces';
import styles from './CheckOutItem.module.scss';
import { Link } from 'react-router-dom';
import { UseCheckOutContext } from 'common/CheckOutContext';
import { toast } from 'react-toastify';

const CheckOutItem = (props: IGame):ReactElement => {

  const { title, qtd, smallImgPath, price, id } = props;
  const { handleAdd, handleDecrease } = UseCheckOutContext();

  return (
    <div className={styles.itemContainer}>
      <figure>
        <img src={ smallImgPath } alt={ title }/>
      </figure>
      <div className={styles.title}>
        <h4>{ title }</h4>
        <span>Valor: <strong>R$ { price.toFixed(2) }</strong>(un.)</span>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.less} onClick={() => {
          handleDecrease(props);
          toast.error('Jogo removido do seu carrinho');
          }}>-</button>
        <span>{ qtd }</span>
        <button className={styles.more} onClick={() =>{ 
          handleAdd(props);
          toast.success('Mais uma unidade adicionada ao carrinho');
          }}>+</button>
      </div>
      <Link to={`/${id}`}>
        Ver detalhes
      </Link>
    </div>
  );
};

export default CheckOutItem;