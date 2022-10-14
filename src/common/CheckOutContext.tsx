import { IGame } from 'interfaces';
import React, { createContext, useState, useContext } from 'react';

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

  const changeQtd = (id: number, increase: number): void => {
    checkOutList.map(item => {
      if (item.id === id) return item.qtd += increase;
      return (item);
    })

    return setCheckOutList(list => [...list])
  }

  const handleAdd = (props: IGame) => {
    const newGame = { ...props };
    const alreadyHasIt = checkOutList.some(item => item.id === props.id);

    if (!alreadyHasIt) {
      newGame.qtd += 1;
      return setCheckOutList(list => [ ...list, newGame]);
    }

    changeQtd(newGame.id, +1);
    console.log(checkOutList);
  }

  return {
    handleAdd,
  }
}

