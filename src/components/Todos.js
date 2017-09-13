import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, titre: 'Apprendre React' },
                { id: 2, titre: 'Vivement Redux' },
                { id: 3, titre: 'setState est relou' }
            ],
            todo: { id: 0, titre: '' }
        };
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.getId=this.getId.bind(this);
    }

    addTodo(event) {
        this.state.todo.id = this.getId()
        console.log(this.state.todo);
        const newState = this.state.todos;
        newState.push(this.state.todo);
        this.setState({
            todos: newState
        });
        this.state.todo = {id: 0, titre: ''};
        event.preventDefault();
    }

    getId() {
        let id;
        for (var item in this.state.todos) {
            if (this.state.todos.hasOwnProperty(item)) {
                id = this.state.todos[item].id
            }
        }
        id++
        return id;
    }

    deleteTodo(item) {
        const newState = this.state.todos;
        if (newState.indexOf(item) > -1) {
            newState.splice(newState.indexOf(item), 1)
            this.setState({
                todos: newState
            });
        }
    }

    handleChange(event) {
        this.setState({
            todo: {titre: event.target.value}
        });
    }

    render() {
        const listTodos = this.state.todos.map((todo, index) => {
            return <li key={index} className="list-group-item">
                {todo.id}{todo.titre}
                <button onClick={this.deleteTodo.bind(this, todo)} className="btn btn-danger">Delete</button>
            </li>
        });

        return (
            <div>
                <form className="form-inline" onSubmit={this.addTodo}>
                    <div className="form-group">
                        <input type="text" name="todo" id="todo" value={this.state.todo.titre} onChange={this.handleChange} className="form-control" placeholder="New Todo . . ." />
                        <button type="submit" className="btn btn-primary">Créer</button>
                    </div>
                </form>
                <ul className="list-group">
                    {listTodos}
                </ul>
            </div>
        )
    }
}

