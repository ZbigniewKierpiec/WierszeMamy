/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appData, setAppData] = useState(null);

  const setAppDataValue = (data) => {
    setAppData(data);
  };

  return (
    <AppContext.Provider value={{ appData, setAppDataValue }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
