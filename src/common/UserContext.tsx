import React, { createContext } from "react";
import { useState } from "react";

type IUser = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  cash: string;
  setCash: React.Dispatch<React.SetStateAction<string>>;
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
};
  
const initialValue: IUser = {
  name: '',
  setName: () => {},
  cash: '',
  setCash: () => {},
  isLogged: false,
  setIsLogged: () => {},
};


export const UserContext = createContext(initialValue);
UserContext.displayName = 'User Context';

export const UserProvider = ({ children }: { children: React.ReactNode } ) => {

  const [ name, setName ] = useState<string>(initialValue.name);
  const [ cash, setCash ] = useState<string>(initialValue.cash);
  const [ isLogged, setIsLogged ] = useState<boolean>(initialValue.isLogged);

  return (
    <UserContext.Provider value={{ name, setName, cash, setCash, isLogged, setIsLogged }}>
      { children }
    </UserContext.Provider>
  )
}