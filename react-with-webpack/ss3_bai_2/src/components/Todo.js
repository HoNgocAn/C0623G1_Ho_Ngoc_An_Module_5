import {Component} from "react";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ["Kỹ sư","Bác sĩ"],
            item: ""
        };
    }

    handleChange = (event) => {
        this.setState({item: event.target.value});
    }
    handleAddJob = () => {
        this.setState(
            {
                ...this.state,
                list: [...this.state.list, this.state.item]
            })
    }

    render() {
        return <>
            <div className="container">
                <h2>TO DO APP</h2>
                <div className="mb-3">
                    <label htmlFor="inputToDo" className="form-label">Nhập công việc </label>
                    <br/>
                    <input type="text" className="form-control" id="inputToDo" onChange={this.handleChange}/>
                </div>
                <button className="btn btn-warning" onClick={this.handleAddJob}>Thêm công việc</button>
            </div>
            <div className="container">
                <table className="table-list">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Công việc</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.list.map((value, index)=> (
                        <tr>
                            <td>{index+1}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    }
}

export default ToDo;