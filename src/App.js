import React from 'react';
import AppRouter from './routes';
import UsersProvider from './utils/context/UsersContext';

const App = () => {
  return (
    <UsersProvider>
      <AppRouter />
    </UsersProvider>
  )
};

export default App;