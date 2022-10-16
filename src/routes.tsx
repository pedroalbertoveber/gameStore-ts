import React from 'react';
import Catalog from 'pages/Catalog';
import Default from 'pages/Default';
import GameInfo from 'pages/GameInfo';
import Login from 'pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CheckOut from 'pages/CheckOut';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Default />}>
          <Route index element={<Catalog />} />
          <Route path=':id' element={<GameInfo />} />
          <Route path='carrinho' element={<CheckOut />}/>
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;