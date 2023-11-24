import React, { Component } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import CreateBook from "./CreateBook";
import EditBook from "./EditBook";

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:8080/book")
            .then(res => {
                this.setState({ books: res.data });
            })
            .catch(err => {
                throw err;
            });
    }


    render() {
        const { books } = this.state;
        return (
            <div className="container">
                <h1>List Book</h1>

                <button type="button" className="btn btn-success"><Link to="/createBook">Add new book</Link></button>
                <table className="table mt-3">
                    <thead>
                        <th scope="col">Tittle</th>
                        <th scope="col">Quantity</th>
                        <th scope="col" colSpan="2">Action</th>
                    </thead>
                    <tbody>
                    {books.map(book =>
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.quantity}</td>
                            <td>
                                <button><Link to="/editBook">Edit</Link></button>

                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <hr />
                <Routes>
                    <Route path="/createBook" element={<CreateBook/>} />
                    <Route path="/editBook" element={<EditBook/>} />
                </Routes>
            </div>
        );
    }
}

export default Book ;