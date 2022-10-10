import React, { useContext } from 'react';
import { UserContext } from 'common/UserContext';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => {

  const { name, setName, cash, setCash } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    navigate('/home', { replace: true });
  };

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