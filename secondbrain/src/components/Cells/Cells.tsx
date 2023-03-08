import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cell from '../Cell/Cell';
import './cells.css';

export class Cells extends Component {

  render() {
    return (
      <>
        <Cell 
          classes='bg-primary' 
          content={
            <>
              <h1>Angular</h1>
              <h4>Notatki z Angulara</h4>
              <Link className='link' to="/SecondBrainApp/angular">Pokaż</Link>
            </>
            } 
          />

        <Cell 
          classes='bg-primary' 
          content={
            <>
              <h1>CSS</h1>
              <h4>Notatki z CSS</h4>
              <Link className='link' to="/SecondBrainApp/css">Pokaż</Link>
            </>
            } 
          />

        <Cell 
          classes='bg-primary' 
          content={
            <>
              <h1>React</h1>
              <h4>Notatki z Reacta</h4>
              <Link className='link' to="/SecondBrainApp/react">Pokaż</Link>
            </>
            } 
          />

        <Cell   
          classes='bg-primary' 
          content={
            <>
              <h1>React Native</h1>
              <h4>Notatki z React Native</h4>
              <Link className='link' to="/SecondBrainApp/reactnative">Pokaż</Link>
            </>
            } 
          />

        <Cell  
          classes='bg-primary' 
          content={
            <>
              <h1>Flutter</h1>
              <h4>Notatki z Fluttera</h4>
              <Link className='link' to="/SecondBrainApp/flutter">Pokaż</Link>
            </>
            } 
          />
        
      </>
    )
  }
}

export default Cells;