import { IGame } from 'interfaces';
import React, { createContext, useState, useContext, useEffect } from 'react';

const initialValue: props = {
  checkOutList: [],
  setCheckOutList: () => {},
};

interface props {
  checkOutList: IGame[],
  setCheckOutList:React.Dispatch<React.SetStateAction<IGame[]>>,
};

export const CheckOutContext = createContext(initialValue);
CheckOutContext.displayName = 'CheckOutContext';

export const CheckOutProvider = ({ children }: { children: React.ReactNode }) => {

  const [ checkOutList, setCheckOutList ] = useState(initialValue.checkOutList);

  return (
    <CheckOutContext.Provider value={{ checkOutList, setCheckOutList }}>
      { children }
    </CheckOutContext.Provider>
  );
};

export const UseCheckOutContext = () => {
  const { checkOutList, setCheckOutList } = useContext(CheckOutContext);
  const [ length, setLength ] = useState<number>(0);
  const [ budget, setBudget ] = useState<number>(0);
 
  useEffect(() => {
    let listLength = 0;
    let listBudget = 0;

    checkOutList.forEach(item => {
      listLength += item.qtd;
      listBudget += (item.qtd * item.price);
    });

    setLength(listLength);
    setBudget(listBudget); 
    
  }, [ checkOutList ]);

  const changeQtd = (id: number, increase: number): void => {
    checkOutList.map(item => {
      if (item.id === id) return item.qtd += increase;
      return (item);
    })

    return setCheckOutList(list => [...list])
  }

  const handleAdd = (props: IGame) => {
    const selectedGame = { ...props };
    const alreadyHasIt = checkOutList.some(item => item.id === props.id);

    if (!alreadyHasIt) {
      selectedGame.qtd += 1;
      return setCheckOutList(list => [ ...list, selectedGame]);
    }

    changeQtd(selectedGame.id, +1);
  }

  const handleDecrease = (props: IGame) => {
    const selectedGame = {...props};
    const lastOne = selectedGame.qtd === 1;

    if (lastOne) {
      return setCheckOutList(list => list.filter(item => item.id !== selectedGame.id));
    }

    changeQtd(selectedGame.id, -1);
  };

  const handleRemove = (id: number ) => {
    setCheckOutList(list => list.filter(item => item.id !== id));
  };

  return {
    handleAdd,
    handleDecrease,
    handleRemove,
    length,
    budget,
  }
};