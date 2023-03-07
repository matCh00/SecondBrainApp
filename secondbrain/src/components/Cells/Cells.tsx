import React, { Component } from 'react';
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
              <a href='/angular'>Pokaż</a>
            </>
            } 
          />

        <Cell 
          classes='bg-primary' 
          content={
            <>
              <h1>CSS</h1>
              <h4>Notatki z CSS</h4>
              <a href='/css'>Pokaż</a>
            </>
            } 
          />

        <Cell 
          classes='bg-primary' 
          content={
            <>
              <h1>React</h1>
              <h4>Notatki z Reacta</h4>
              <a href='/react'>Pokaż</a>
            </>
            } 
          />

        <Cell   
          classes='bg-primary' 
          content={
            <>
              <h1>React Native</h1>
              <h4>Notatki z React Native</h4>
              <a href='/reactnative'>Pokaż</a>
            </>
            } 
          />

        <Cell  
          classes='bg-primary' 
          content={
            <>
              <h1>Flutter</h1>
              <h4>Notatki z Fluttera</h4>
              <a href='/flutter'>Pokaż</a>
            </>
            } 
          />
        
      </>
    )
  }
}

export default Cells;