import React, { ReactElement } from 'react';
import styles from './Footer.module.scss';

const Footer = (): ReactElement => {
  return (
    <footer className={styles.footerContainer}>
      <div>&copy; Loja de Games - Todos os direitos reservados</div>
      <address>
        <p>Rua José Boschetti, 268 - APTO 31</p>
        <p>Bairro Madureira | Caxias do Sul - RS</p>
        <p>(54)99985-9934</p>
      </address>
    </footer>
  );
};

export default Footer;