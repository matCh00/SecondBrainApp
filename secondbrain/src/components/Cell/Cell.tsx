import React, { Component, ReactNode } from 'react';
import './cell.css';

export class Cell extends Component<IProps, IState> {

  constructor(props: any) {
    super(props);
  }

  render() {

    return (
      <article className={`cell ${this.props.classes}`}>
        {this.props.content}
      </article>
    )
  }
}

export default Cell;


interface IProps {
  classes?: string;
  content?: ReactNode;
}

interface IState {
  click?: any;
}