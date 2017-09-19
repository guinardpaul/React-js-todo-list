import React, { Component } from 'react';

export class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: { titre: '' }
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(event) {
    this.setState({
      todo: { titre: event.target.value }
    });
  }

  addTodo(event) {
    event.preventDefault();
    if (this.state.todo.titre !== '') {
      this.props.onFormSubmit(this.state.todo);
      this.setState({
        todo: { titre: '' }
      });
    }
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.addTodo}>
        <div className="form-group">
          <input type="text" name="todo" id="todo" size="49" value={this.state.todo.titre} onChange={this.handleChange}
            className="form-control" placeholder="New Todo . . ." required />
          <button type="submit" className="btn btn-primary">Créer</button>
        </div>
      </form>
    )
  }
}