import React, { Component } from 'react';

export class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.todos
        };
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

    render() {
        const listTodos = this.state.todos.map((todo, index) => {
            return <li key = { index }
            className = "list-group-item" > { todo.titre } <
                button onClick = { this.deleteTodo.bind(this, todo) }
            className = "btn btn-danger" > < span className = "badge" > Delete < /span></button >
                <
                /li>
        });

        return ( <
            div >
            <
            ul className = "list-group" > { listTodos } <
            /ul> <
            /div>
        )
    }
}