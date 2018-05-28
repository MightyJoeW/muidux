// External Dependencies
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

// Internal Dependencies
import './App.css';
import logo from './logo.svg';
import { updateExampleText } from './state/reducer';

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

const appIntro = {
  fontSize: 'large',
}

const appLogo = {
  animation: 'App-logo-spin infinite 20s linear',
  height: '80px',
}

const appTitle = {
  fontSize: '1.5em',
}

// Component Definition
class App extends Component {
  render() {
    const {
      updateExampleText
    } = this.props;

    return (
      <div style={app}>
        <CssBaseline />
        <header style={appHeader}>
          <img src={logo} style={appLogo} alt="logo" />
          <h1 style={appTitle}>Welcome to MuiDux</h1>
        </header>
        <p style={appIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button
          variant="raised"
          color="primary"
          onClick={updateExampleText}
        >
          Go Create!
    </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { exampleText } = state;
  return {
    exampleText
  }
}

export default connect(mapStateToProps, { updateExampleText })(App);
