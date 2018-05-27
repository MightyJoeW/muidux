// External Dependencies
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import logo from './logo.svg';
import './App.css';

// Local Variables
const app = {
  textAlign: 'center',
  fontFamily: 'sans-serif',
}

const appHeader = {
  backgroundColor: '#222',
  height: '150px',
  padding: '20px',
  color: 'white',
}

const appLogo = {
  animation: 'App-logo-spin infinite 20s linear',
  height: '80px',
}

const appTitle = {
  fontSize: '1.5em',
}

const appIntro = {
  fontSize: 'large',
}

// Component Definition
class App extends Component {
  render() {
    return (
      <div style={app}>
        <CssBaseline />
        <header style={appHeader}>
          <img src={logo} style={appLogo} alt="logo" />
          <h1 style={appTitle}>Welcome to MuiDucks</h1>
        </header>
        <p style={appIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
