import React, { Component } from "react";
import axios from "axios";

class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        axios
            .get("https://my-json-server.typicode.com/codegym-vn/mock-api-books/books")
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
                                <button className="btn btn-primary">Edit</button>

                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Book ;