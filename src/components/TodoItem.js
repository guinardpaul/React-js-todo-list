import React, { Component } from 'react';
import { CheckTodo } from './CheckTodo';
import '../css/TodoItem.css';

export class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.deleteTodo = this.deleteTodo.bind(this);
    this.done = this.done.bind(this);
  }

  deleteTodo() {
    this.props.onDelete(this.props.todo);
  }

  done(todo) {
    this.props.handleDone(todo);
  }

  render() {
    var todoClass = '';
    if (this.props.todo.done) {
      todoClass = 'alignText done';
    } else {
      todoClass = 'alignText';
    }

    return (
      <li className="list-group-item">
        <CheckTodo handleDone={this.done} todo={this.props.todo} /><span className={todoClass}>{this.props.todo.titre}</span>
        <button onClick={this.deleteTodo} className="btn btn-danger leftAlign"><span className="badge">Delete</span></button>
      </li>
    )
  }
}