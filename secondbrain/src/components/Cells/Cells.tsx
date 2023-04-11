import React, { Component } from 'react';
import Cell from '../Cell/Cell';
import './cells.css';

export class Cells extends Component {

  render() {
    return (
      <>
        <Cell 
          classes='bg-primary' 
          link='/SecondBrainApp/angular'
          content={
            <>
              <h1>Angular</h1>
              <h4>Notatki z Angulara</h4>
            </>
            } 
          />

        <Cell 
          classes='bg-primary' 
          link='/SecondBrainApp/css'
          content={
            <>
              <h1>CSS</h1>
              <h4>Notatki z CSS</h4>
            </>
            } 
          />

        <Cell 
          classes='bg-primary' 
          link='/SecondBrainApp/html'
          content={
            <>
              <h1>HTML</h1>
              <h4>Notatki z HTML</h4>
            </>
            } 
          />

        <Cell 
          classes='bg-primary' 
          link='/SecondBrainApp/react'
          content={
            <>
              <h1>React</h1>
              <h4>Notatki z Reacta</h4>
            </>
            } 
          />

        <Cell   
          classes='bg-primary' 
          link='/SecondBrainApp/reactnative'
          content={
            <>
              <h1>React Native</h1>
              <h4>Notatki z React Native</h4>
            </>
            } 
          />

        <Cell  
          classes='bg-primary' 
          link='/SecondBrainApp/flutter'
          content={
            <>
              <h1>Flutter</h1>
              <h4>Notatki z Fluttera</h4>
            </>
            } 
          />

        <Cell  
          classes='bg-primary' 
          link='/SecondBrainApp/csharp'
          content={
            <>
              <h1>C Sharp</h1>
              <h4>Notatki z C Sharp</h4>
            </>
            } 
          />
        
      </>
    )
  }
}

export default Cells;