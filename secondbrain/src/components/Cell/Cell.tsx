import React, { Component, ReactNode } from 'react';
import './cell.css';
import { Link } from 'react-router-dom';

export class Cell extends Component<IProps, IState> {

  constructor(props: any) {
    super(props);
  }

  render() {

    return (
      <Link to={this.props.link!} className={`cell ${this.props.classes}`}>
        <div className="cell-content">
          {this.props.content}
        </div>
      </Link>
    )
  }
}

export default Cell;


interface IProps {
  classes?: string;
  content?: ReactNode;
  link?: string;
}

interface IState {
  click?: any;
}