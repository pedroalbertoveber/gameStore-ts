import React, { ReactElement }  from 'react';
import {  useNavigate } from 'react-router-dom';
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import styles from './Return.module.scss';

const Return = () => {

  const navigate = useNavigate();

  return (
    <div className={styles.returnContainer}>
      <button type='button' onClick={() => navigate('/')}>
        <BsArrowLeftCircleFill />
        Voltar para o catálogo
      </button>
    </div>
  );
};

export default Return;