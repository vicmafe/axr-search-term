import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [responseFetchTerm, setResponseFetchTerm] = useState([]);
  const value = {
    searchTerm,
    setSearchTerm,
    responseFetchTerm,
    setResponseFetchTerm,
  };
  
  return (
    <AppContext.Provider value={ value }>
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
