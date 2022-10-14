import React, { ReactElement, useContext } from "react";
import games from 'data/games.json';
import GameCard from "components/GameCard";
import styles from './Catalog.module.scss';
import { UserContext } from "common/UserContext";
import { Navigate } from "react-router-dom";

const Catalog = ():ReactElement => {

  const gameList = [...games];
  const { isLogged } = useContext(UserContext);

  if (!isLogged) {
    return <Navigate to='/login' />
  }

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1>Catálogo de jogos</h1>
      </div>
      <section className={styles.catalogContainer}>
        {gameList.map(game => (
          <GameCard key={game.id} {...game} />
        ))}
      </section>
    </main>
  );
};

export default Catalog;