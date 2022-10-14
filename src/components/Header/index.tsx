import React, { ReactElement, useContext } from "react";
import { UserContext } from "common/UserContext";
import { MdLocalGroceryStore, MdLogout } from "react-icons/md";
import styles from './Header.module.scss';
import { Navigate } from "react-router-dom";

const Header = (): ReactElement => {

  const { setIsLogged, setName, setCash } = useContext(UserContext);

  const logOut = (): void => {
    window.localStorage.removeItem('userData');
    setIsLogged(false);
    setName('');
    setCash('');

    <Navigate to='/login' />
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.title}>
        <h1>Loja de Games</h1>
      </div>
      <div className={styles.navigation}>
        <div className={styles.logOut}>
          <button type="button" onClick={() => logOut()}>
            <MdLogout />
            LogOut
          </button>
        </div>
        <div className={styles.buttonContainer}>
          <button type="button">
            <span>Ir para o carrinho</span>
            <MdLocalGroceryStore />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;