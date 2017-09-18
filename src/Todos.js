import React, { Component } from 'react';
import { Todo } from './components/Todo';
import { Title } from './components/Title';
import { AddTodo } from './components/AddTodo';
import { TODOS } from './mock.data';
import './Todos.css';

export var Todos = React.createClass({
  /* constructor(props) {
    super(props);
    this.state = {
      todos: TODOS
    };
  } */
  getInitialState() {
    return { todos: TODOS };
  },

  handleSubmit(todo) {
    const newState = this.state.todos;
    newState.push(todo);
    this.setState({
      todos: newState
    });
  },

  render() {
    return (
      <div className="container col-md-4 marge-top">
        <Title />
        <AddTodo onFormSubmit={this.handleSubmit} />
        <Todo todos={this.state.todos} />
      </div>
    );
  }
})
