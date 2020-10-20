import React, { createContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ACCESS_KEY_CONSTANT } from '../Utility/constant';

export const AuthContext = createContext({ authenticated: false });

export const AuthContextProvider = ({ children, history }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const setAuth = () => {
    if (localStorage.getItem(ACCESS_KEY_CONSTANT)) {
      setAuthenticated(true);
      history.push('/')
    }
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        setAuth
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
