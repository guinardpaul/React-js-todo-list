import React, { Component } from 'react';
import { TodoItem } from './TodoItem';

export class Todo extends Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.todoDone = this.todoDone.bind(this);
    }

    handleDelete(item) {
        this.props.onDelete(item);
    }

    todoDone(todo) {
        this.props.onDone(todo);
    }

    render() {
        const listTodos = this.props.todos.map((todo, index) => {
            return <TodoItem handleDone={this.todoDone} todo={todo} onDelete={this.handleDelete} key={index} />
        });

        return (
            <div>
                <ul className="list-group">{listTodos}</ul>
            </div>
        )
    }
}