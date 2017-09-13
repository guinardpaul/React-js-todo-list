import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 1, titre: 'azee'},
                {id: 2, titre: 'ezaa'},
                {id: 3, titre: 'zzzzzz'}
            ]
        }
    }

    deleteTodo(todo){
        const newState = this.state.todos;
        if(newState.indexOf(todo) > -1){
            newState.splice(newState.indexOf(todo), 1)
            this.setState({
                todos: newState
            });
        }
    }
    
    render() {
        const listTodos = this.state.todos.map((todo, index) => {
                        return <li key={index}>
                            <span>{todo.id} {todo.titre}</span>
                            <button onClick={this.deleteTodo.bind(this, todo)} className="btn btn-danger">Delete</button>
                        </li>
        });

        return(
            <div>
                <ul>
                    {listTodos}
                </ul>
            </div>
        )
    }
}

Todos.PropTypes = {
    todo: PropTypes.object,
    todos: PropTypes.array
}