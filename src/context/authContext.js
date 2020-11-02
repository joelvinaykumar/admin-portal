import React, { createContext, useContext } from 'react';
import { ACCESS_KEY_CONSTANT } from '../Utility/constant';

const isTokenPresent = localStorage.getItem(ACCESS_KEY_CONSTANT)? localStorage.getItem(ACCESS_KEY_CONSTANT).length>0 : false;

export const AuthContext = createContext({ 
  authenticated: isTokenPresent
});

export const AuthContextProvider = ({ children, history }) => {
  const { authenticated } = useContext(AuthContext);

  return (
    <AuthContext.Provider
      value={{ authenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};
