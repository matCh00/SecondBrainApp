import React, { Component } from 'react';
import Cell from '../Cell/Cell';
import './cells.css';

export class Cells extends Component {

  render() {
    return (
      <>
        <Cell 
          classes='bcg-primary' 
          link='/SecondBrainApp/angular'
          content={
              <h1>Angular</h1>
            } 
          />

        <Cell 
          classes='bcg-primary' 
          link='/SecondBrainApp/css'
          content={
              <h1>CSS</h1>
            } 
          />

        <Cell 
          classes='bcg-primary' 
          link='/SecondBrainApp/html'
          content={
              <h1>HTML</h1>
            } 
          />

        <Cell 
          classes='bcg-primary' 
          link='/SecondBrainApp/react'
          content={
              <h1>React</h1>
            } 
          />

        <Cell   
          classes='bcg-primary' 
          link='/SecondBrainApp/reactnative'
          content={
              <h1>React Native</h1>
            } 
          />

        <Cell  
          classes='bcg-primary' 
          link='/SecondBrainApp/flutter'
          content={
              <h1>Flutter</h1>
            } 
          />

        <Cell  
          classes='bcg-primary' 
          link='/SecondBrainApp/csharp'
          content={
              <h1>C Sharp</h1>
            } 
          />
        
      </>
    )
  }
}

export default Cells;