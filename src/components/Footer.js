import React, { Component } from 'react';
import '../css/Footer.css';

export class Footer extends Component {
  constructor(props) {
    super(props);

    this.deleteTodos = this.deleteTodos.bind(this);
  }

  deleteTodos() {
    var todoToDelete = [];
    for (var todo in this.props.todos) {
      if (this.props.todos.hasOwnProperty(todo)) {
        if (this.props.todos[todo].done) {
          todoToDelete.push(this.props.todos[todo]);
        }
      }
    }
    this.props.onDelete(todoToDelete);
  }

  render() {
    return (
      <div>
        <a className="leftAlign" onClick={this.deleteTodos}>Supprimer Todos Done</a>
      </div>
    )
  }
}