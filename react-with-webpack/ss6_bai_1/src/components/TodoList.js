import React, { Component } from "react";
import axios from "axios";



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            todo:{
                id: "",
                title: "",
            }
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:8080/todoList")
            .then(res => {
                this.setState({ todos: res.data });
            })
            .catch(err => {
                throw err;
            });
    }

    handleAdd=()=>{
        this.setState(
            {
                todos:[
                    ...this.state.todos,
                    this.state.todo
                ],
                todo: {
                    id: "",
                    title: "",
                }
            }
        )
    }

    handleTodo =(e)=>{
        this.setState(
            {
                todo:{
                    id: this.state.todos.length+1,
                    title: e
                }
            }
        )
    }

    render() {
        const { todos } = this.state;
        return (
            <div>
                <h1>TodoList</h1>
                    <input type="text" onChange={(e)=>this.handleTodo(e.target.value)} value={this.state.todo.title}/>
                    <button type="button" onClick={this.handleAdd}>Submit</button>
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