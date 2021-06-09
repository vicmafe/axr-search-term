import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const value = {
    searchTerm,
    setSearchTerm,
  };
  
  return (
    <AppContext.Provider value={ value }>
      { children }
    </AppContext.Provider>
  );
}

export default AppProvider;
