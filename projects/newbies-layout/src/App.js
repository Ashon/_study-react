import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Navigator from './Navigator';
import MainView from './MainView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout
          side={<Navigator />}
          main={<MainView />}
        />
      </BrowserRouter>
    );
  }
}

export default App;
