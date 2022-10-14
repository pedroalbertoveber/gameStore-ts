import React from 'react';
import { CheckOutProvider } from 'common/CheckOutContext';
import { UserProvider } from 'common/UserContext';
import Router from 'routes';

function App() {
  return (
    <UserProvider>
      <CheckOutProvider>
        <Router />
      </CheckOutProvider>
    </UserProvider>
  );
}

export default App;
