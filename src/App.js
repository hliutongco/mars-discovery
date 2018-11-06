import React, { Component } from 'react';
import Grid from './components/grid/Grid';
import SpriteContainer from './components/grid/SpriteContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Grid/>
        <SpriteContainer/>
      </div>
    );
  }
}

export default App;
