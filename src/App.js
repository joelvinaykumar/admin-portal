import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Utility/theme.config';
import { GlobalStyles } from './Utility/global';
import { ThemeContext } from './context/themeContext';
import { AuthContextProvider, AuthContext } from './context/authContext';
import './App.css';

import { Home } from './Containers';
import { Login } from './Containers/Login';
import { MobileView } from './Components';

const App = () => {
  const [themeContext, authContext] = [
    useContext(ThemeContext),
    useContext(AuthContext),
  ];
  const { theme } = themeContext;
  const { authenticated } = authContext;
  const isMobileOrTablet = window.innerWidth < 768;

  return (
    <AuthContextProvider>
      {isMobileOrTablet ? (
        <MobileView />
      ) : (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          {authenticated ? (
            <>
              <GlobalStyles />
              <Home />
            </>
          ) : (
            <>
              <GlobalStyles />
              <Login />
            </>
          )}
        </ThemeProvider>
      )}
    </AuthContextProvider>
  );
};

export default App;
