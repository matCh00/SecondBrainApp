import React, { Component } from 'react';
import './app.css';
import Cells from './components/Cells/Cells';

export class App extends Component {

  render() {
    return (
      <main className='grid'>

        <Cells />

      </main>
    )
  }
}

export default App;