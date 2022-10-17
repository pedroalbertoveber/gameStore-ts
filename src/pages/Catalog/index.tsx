import React, { ReactElement, useContext, useState, useEffect } from "react";
import games from 'data/games.json';
import GameCard from "components/GameCard";
import styles from './Catalog.module.scss';
import { UserContext } from "common/UserContext";
import { Navigate } from "react-router-dom";
import { IGame } from "interfaces";
import { GoArrowDown, GoArrowUp } from 'react-icons/go'

const Catalog = ():ReactElement => {

  const gameList = [...games];
  const { isLogged } = useContext(UserContext);

  const [ catalog, setCatalog ] = useState<IGame[]>(gameList);
  const [ openFilter, setOpenFilter ] = useState<boolean>(false);
  const [ filter, setFilter ] = useState('Todos');
  
  const filters = [
    {filter: 'Todos', id: 'todosFilter'},
    {filter: 'Ação', id: 'acaoFilter'},
    {filter: 'Corrida', id: 'corridaFilter'},
    {filter: 'Terror', id: 'terrorFilter'},
    {filter: 'Futebol', id: 'futebolFilter'}
  ];

  useEffect(() => {
    if (filter === 'Todos') return setCatalog(gameList);
    setCatalog(gameList);
    setCatalog(list => list.filter(item => item.genre === filter));
  }, [ catalog, filter, gameList ]);

  if (!isLogged) {
    return <Navigate to='/login' />;
  }

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1>Catálogo de jogos</h1>
      </div>
      <div className={styles.filterContainer}>
        <div className={styles.search}>Filtre a modalidade do seu jogo {!openFilter ? <GoArrowDown /> : <GoArrowUp />}</div>
        <div className={styles.filter}>
          {openFilter ? 
          filters.map(item => <div key={item.id} className={styles.option} onClick={() => {
            setOpenFilter(!openFilter);
            setFilter(item.filter);
          }}>{item.filter}</div>) : 
          <div className={styles.closedFilter} onClick={() => setOpenFilter(!openFilter)}>{filter}</div>
          }
        </div>
      </div>
      <section className={styles.catalogContainer}>
        {catalog.map(game => (
          <GameCard {...game} key={game.id}/>
        ))}
      </section>
    </main>
  );
};

export default Catalog;