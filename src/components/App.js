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
  
  return (
    <ThemeProvider>
      <CSSReset />
      <Router history>
        <Switch>
          <Route exact path={process.env.PUBLIC_URL + '/'} component={PatientHome}/>
          <Route exact path={process.env.PUBLIC_URL + '/report'} component={Report}/>
          <Route exact path={process.env.PUBLIC_URL + '/prescriptions'}component={Prescriptions}/>
        </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
