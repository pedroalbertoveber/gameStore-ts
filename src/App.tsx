import React from 'react';
import { CheckOutProvider } from 'common/CheckOutContext';
import { UserProvider } from 'common/UserContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from 'routes';

function App() {
  return (
    <UserProvider>
      <CheckOutProvider>
        <ToastContainer autoClose={2000} theme={'dark'} />
        <Router />
      </CheckOutProvider>
    </UserProvider>
  );
}

export default App;
