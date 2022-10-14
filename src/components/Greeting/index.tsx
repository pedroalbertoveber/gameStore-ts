import { UserContext } from "common/UserContext";
import React, { ReactElement, useContext } from "react";
import styles from './Greeting.module.scss';

const Greeting = ():ReactElement => {

  const { name, cash } = useContext(UserContext);

  return (
    <div className={styles.greetingContainer}>
      <h4>Olá, <strong>{name}</strong></h4>
      <span>Seu saldo atual é <strong>R$ {Number(cash).toFixed(2)}</strong></span>
    </div>
  );
};

export default Greeting;