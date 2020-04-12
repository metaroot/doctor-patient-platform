import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import logo from '../logo.svg';
import '../styles/App.css';
import Report from './Report'
import Prescriptions from './Prescriptions'
import { ThemeProvider, CSSReset } from "@chakra-ui/core"


function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Router>
        <Switch>
          <Route path="/report" component={Report}/>
          <Route path="/prescriptions" component={Prescriptions}/>
        </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
