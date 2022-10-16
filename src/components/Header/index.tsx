import React, { ReactElement, useContext } from "react";
import { UserContext } from "common/UserContext";
import { MdLocalGroceryStore, MdLogout } from "react-icons/md";
import styles from './Header.module.scss';
import { Navigate, useNavigate } from "react-router-dom";
import { UseCheckOutContext } from "common/CheckOutContext";

const Header = (): ReactElement => {

  const { setIsLogged, setName, setCash } = useContext(UserContext);
  const { length } = UseCheckOutContext();
  const navigate = useNavigate();

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
          <button type="button" onClick={() => navigate('/carrinho')}>
            <span>Ir para o carrinho</span>
            <MdLocalGroceryStore />
            { length > 0 && <div className={styles.length}>{ length }</div>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;