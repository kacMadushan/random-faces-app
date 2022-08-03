import React, { createContext, useState } from 'react';
import useFetch from '../hooks/useFetch';

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [gender, setGender] = useState('all')
  const [url, setUrl] = useState(null);
  const [loading, results, error] = useFetch(url);
  const value = { loading, results, error, gender, setGender, setUrl };
  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  )
};

export default UsersProvider;