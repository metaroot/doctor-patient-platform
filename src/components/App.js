import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import logo from '../logo.svg';
import '../styles/App.css';
import Report from './Report'
import PatientHome from './PatientHome'
import Prescriptions from './Prescriptions'
import { ThemeProvider, CSSReset } from "@chakra-ui/core"


function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Router>
        <Switch>
          <Route exact path="/doctor-patient-platform" component={PatientHome}/>
          <Route exact path="/doctor-patient-platform/report" component={Report}/>
          <Route exact path="/doctor-patient-platform/prescriptions" component={Prescriptions}/>
        </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
