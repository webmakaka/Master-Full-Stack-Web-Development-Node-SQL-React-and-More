import React, { Component } from 'react';
import Genertation from 'components/Genertation';
import Dragon from 'components/Dragon';
import 'index.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Dragon Stack</h2>
        <Genertation />
        <Dragon />
      </div>
    );
  }
}

export default App;
