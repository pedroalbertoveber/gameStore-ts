import React, { useContext, useEffect } from 'react';
import { UserContext } from 'common/UserContext';
import { useNavigate, Navigate } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => {

  const { name, setName, cash, setCash, setIsLogged, isLogged } = useContext(UserContext);
  const navigate = useNavigate();

  const userData = {
    name: name,
    cash: cash,
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    setIsLogged(!isLogged);
    window.localStorage.setItem('userData', JSON.stringify(userData));
    navigate('/', { replace: true });
  };

  useEffect(() => {

    const userLogged = window.localStorage.getItem('userData');

    if (userLogged) {
      const userLoggedJs = JSON.parse(userLogged);
      
      setName(userLoggedJs.name);
      setCash(userLoggedJs.cash);
      setIsLogged(true);
    }
  }, [setIsLogged, setName, setCash]);

  if (isLogged) {
    return <Navigate to='/' />;
  }

  return (
    <section className={styles.loginContainer}>
      <div className={styles.loginContainer__title}>
        <h2>Loja de Games</h2>
      </div>
      <form>
        <div>
          <label>Nome</label>
          <input type='text' value={name} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value) }/>
        </div>
        <div>
          <label>Saldo</label>
          <input type='number' placeholder='R$' value={cash} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCash(e.target.value) }/>
        </div>
        <button type='submit' disabled={name.length < 4} onClick={(e) => handleSubmit(e)}>Entrar</button>
      </form>
    </section>
  );
};

export default Login;