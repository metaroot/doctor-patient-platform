import React, {Component, useState, useEffect} from 'react'
import { Route, Switch, BrowserRouter as Router} from "react-router-dom";
import logo from '../logo.svg';
import '../styles/App.css';
import Report from './Report'
import PatientHome from './PatientHome'
import LoginPage from './LoginPage'
import Prescriptions from './Prescriptions'
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import createHistory from 'history/createBrowserHistory';
import routes from './routes';
import protectedRoutes from './protectedRoutes';
import ProtectedRouteHoc from './ProtectedRouteHoc';
import firebase, { auth, provider, firebaseConfig } from '../firebase.js';


export const AuthContext = React.createContext(null);

function App() {
  
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  function readSession() {
    const user = window.sessionStorage.getItem(
			`firebase:authUser:${firebaseConfig.apiKey}:[DEFAULT]`
		);
		if (user) setLoggedIn(true)
  }

  useEffect(() => {
    readSession()
  }, [])

  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, user, setUser }}>
      <ThemeProvider>
        <CSSReset />
        <Router history={history} basename={process.env.PUBLIC_URL}>
          <Switch>
            {protectedRoutes.map(route => (
              <ProtectedRouteHoc
                key={route.path}
                //isLoggedIn={isLoggedIn}
                path={route.path}
                component={route.main}
                exact={route.exact}
                public={route.public}
              />
            ))}
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>
        </Router>  
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
