import React, { Component } from 'react';
import { Todo } from './components/Todo';
import { Title } from './components/Title';
import { AddTodo } from './components/AddTodo';
import { Footer } from './components/Footer';
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

  handleDelete(todo) {
    const newState = this.state.todos;
    if (newState.indexOf(todo) > -1) {
      newState.splice(newState.indexOf(todo), 1)
      this.setState({
        todos: newState
      });
    }
  },

  handleMultipleDelete(todos) {
    for (var todo in todos) {
      if (todos.hasOwnProperty(todo)) {
        this.handleDelete(todos[todo]);
      }
    }
  },

  setTodoDone(todo) {
    const newState = this.state.todos;
    if (newState.indexOf(todo) > -1) {
      if (todo.done) {
        todo.done = false;
      } else {
        todo.done = true;
      }
      console.log(todo);
      newState.splice(newState.indexOf(todo), 1, todo);
      this.setState({
        todos: newState
      });
    }
  },

  render() {
    return (
      <div className="container col-md-4 marge-top">
        <Title />
        <AddTodo onFormSubmit={this.handleSubmit} />
        <Todo onDone={this.setTodoDone} onDelete={this.handleDelete} todos={this.state.todos} />
        <Footer todos={this.state.todos} onDelete={this.handleMultipleDelete} />
      </div>
    );
  }
})
