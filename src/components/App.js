import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import logo from '../logo.svg';
import '../styles/App.css';
import Report from './Report'
import PatientHome from './PatientHome'
import Prescriptions from './Prescriptions'
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import createHistory from 'history/createBrowserHistory';



function App() {
  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });
  return (
    <ThemeProvider>
      <CSSReset />
      <Router history={history}>
        <Switch>
          <Route path="/" component={PatientHome}/>
          <Route path="/report" component={Report}/>
          <Route path="/prescriptions" component={Prescriptions}/>
        </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
