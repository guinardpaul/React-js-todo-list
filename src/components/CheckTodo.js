import React, { Component } from 'react';

export class CheckTodo extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      todo: this.props.todo
    });

    this.done = this.done.bind(this);
  }

  done() {
    this.props.handleDone(this.state.todo);
  }

  render() {
    return (
      <label><input type="checkbox" value={this.state.todo.done} checked={this.state.todo.done} onChange={this.done} /></label>
    )
  }
}