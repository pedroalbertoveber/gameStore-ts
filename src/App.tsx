import { UserProvider } from 'common/UserContext';
import React from 'react';
import Router from 'routes';

function App() {
  return (
    <main>
      <UserProvider>
        <Router />
      </UserProvider>
    </main>
  );
}

export default App;
