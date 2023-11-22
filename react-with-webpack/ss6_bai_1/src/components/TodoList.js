import React, { Component } from "react";
import axios from "axios";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        axios
            .get("https://my-json-server.typicode.com/codegym-vn/mock-api-books/books")
            .then(res => {
                this.setState({ todos: res.data });
            })
            .catch(err => {
                throw err;
            });
    }


    render() {
        const { todos } = this.state;
        return (
            <div>
                <h1>TodoList</h1>
                <form>
                    <input type="text"/>
                    <button type="submit">Submit</button>
                </form>
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}> {todo.title} </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoList ;