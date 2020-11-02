import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { lightTheme, darkTheme } from './Utility/theme.config';
import { GlobalStyles } from './Utility/global';
import { ThemeContext } from './context/themeContext';
import { AuthContextProvider, AuthContext } from './context/authContext';
import './App.css';

import { NewHome } from './Containers';
import { Login } from './Containers/Login';
import { MobileView, NotFound } from './Components';

const App = () => {
  const [themeContext, authContext] = [useContext(ThemeContext),useContext(AuthContext)];
  const { theme } = themeContext;
  const { authenticated } = authContext;
  const isMobileOrTablet = window.innerWidth < 768;
  const isLightTheme = theme === 'light';

  if(isMobileOrTablet) {
    return <MobileView />;
  }

  return (
    <AuthContextProvider>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <GlobalStyles />
                {authenticated ? <NewHome /> : <Login />}
            </Route>
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </AuthContextProvider>
  );
};

export default App;
