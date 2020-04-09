import React from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Header from './Header'
import Report from './Report'
import { ThemeProvider, CSSReset } from "@chakra-ui/core"


function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Report/>
    </ThemeProvider>
  );
}

export default App;
