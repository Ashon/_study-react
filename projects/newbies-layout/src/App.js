import React, { Component } from 'react';
import Layout from './layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout
        side={<span>side</span>}
        main={<span>main</span>}
      />
    );
  }
}

export default App;
