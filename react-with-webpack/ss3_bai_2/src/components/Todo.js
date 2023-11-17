import {Component} from "react";

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                id :1,
                name : "Kỹ sư"
            },
                {
                id :2,
                name : "Bác sĩ"
                }
            ],
            item: {}
        };
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState(
            {
                item: {
                    name: event.target.value
                }
            }
        );
    }
    handleAddJob = () => {
        const newId = this.state.list.length+1;
        this.setState(
            {
                ...this.state,
                list: [...this.state.list, {
                    ...this.state.item, id:newId
                }]
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
                    {this.state.list.map((job, index)=> (
                        <tr key={job.id}>
                            <td>{index+1}</td>
                            <td>{job.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    }
}
export default ToDo;