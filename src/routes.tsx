import Catalog from 'pages/Catalog';
import Default from 'pages/Default';
import Login from 'pages/Login';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Default />}>
          <Route index element={<Catalog />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;