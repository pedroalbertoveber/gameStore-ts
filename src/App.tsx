import { UserProvider } from 'common/UserContext';
import React from 'react';
import Router from 'routes';

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
