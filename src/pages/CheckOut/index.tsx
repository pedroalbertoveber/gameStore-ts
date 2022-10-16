import { CheckOutContext } from 'common/CheckOutContext';
import CheckOutItem from 'components/CheckOutItem';
import React, { ReactElement, useContext } from 'react';
import styles from './CheckOut.module.scss';
import { BsArrowLeftCircleFill, BsBagFill } from 'react-icons/bs'
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from 'common/UserContext';

const CheckOut = (): ReactElement => {

  const { checkOutList } = useContext(CheckOutContext);
  const { isLogged } = useContext(UserContext);
  const navigate = useNavigate();

  if (!isLogged) {
    return <Navigate to='/' />
  }

  return (
    <section className={styles.checkOutContainer}>
      <div className={styles.header}>
        <h1>Carrinho</h1>
      </div>
      {checkOutList.length !== 0 ? 
        <div className={styles.flexContainer}>
          <div className={styles.checkOutItems}>
            { checkOutList.map(item => (
              <CheckOutItem {...item} key={item.id} />
            ))}
          </div>
          <aside>
            <div>
              <h4>Resumo do pedido:</h4>
            </div>
            <div>
              <span>Quantidade de jogos: <strong>2</strong></span>
            </div>
            <div>
              <span>Valor total: <strong>R$ 350.00</strong></span>
            </div>
            <div>
              <button>
                <BsBagFill /> Finalizar pedido
              </button>
            </div>          
          </aside>
        </div>
        :
        <div className={styles.ops}>
          <h2>Ops... você não possui nenhum item em seu carrinho :(</h2>
          <button onClick={() => navigate('/')}>
            <BsArrowLeftCircleFill /> Retornar ao catálogo
          </button>
        </div>
      }

    </section>
  );
};

export default CheckOut;