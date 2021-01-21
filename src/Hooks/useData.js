import React, { useState } from 'react';

const DataContext = React.createContext();

export const useData = () => React.useContext(DataContext);

function DataProvider({ children }) {
  const [data, setData] = useState({});

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
