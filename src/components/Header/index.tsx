import React, { ReactElement } from "react";
import { MdLocalGroceryStore } from "react-icons/md";
import styles from './Header.module.scss';

const Header = (): ReactElement => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.title}>
        <h1>Loja de Games</h1>
      </div>
      <div className={styles.buttonContainer}>
        <button type="button">
          <span>Ir para o carrinho</span>
          <MdLocalGroceryStore />
        </button>
      </div>
    </header>
  );
};

export default Header;