import React, { ReactElement } from "react";
import styles from './Greeting.module.scss';

const Greeting = ():ReactElement => {
  return (
    <div className={styles.greetingContainer}>
      <h4>Olá, <strong>Fulano!</strong></h4>
      <span>Seu saldo atual é <strong>R$ 150,00</strong></span>
    </div>
  );
};

export default Greeting;