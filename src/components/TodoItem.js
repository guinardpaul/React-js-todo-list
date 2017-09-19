import React, { Component } from 'react';

export class TodoItem extends Component {
  deleteTodo(item) {
    const newState = this.state.todos;
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1)
      this.setState({
        todos: newState
      });
    }
  }
  render() {
    return (
      <li key={index} className="list-group-item">
        {this.props.todo.titre}
        <button onClick={this.deleteTodo.bind(this, this.props.todo)} className="btn btn-danger"><span className="badge">Delete</span></button>
      </li>
    )
  }
}