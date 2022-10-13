import React, { ReactElement } from "react";
import games from 'data/games.json';
import GameCard from "components/GameCard";
import styles from './Catalog.module.scss';

const Catalog = ():ReactElement => {

  const gameList = [...games];

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