import {Component} from "react";

class Student extends Component{
    constructor(props) {
        super(props);
        this.state ={
            students: [
                {
                    id: 1,
                    name: 'Le Van A',
                    age: 20,
                    address: 'Ha Noi'
                },{
                    id: 2,
                    name: 'Le Van B',
                    age: 25,
                    address: 'Sai Gon'
                },{
                    id: 3,
                    name: 'Le Van C',
                    age: 30,
                    address: 'Da Nang'
                }
            ]
        }
    }
    render() {
        return(
            <>
                <div className="container">
                    <h3>Danh sách học sinh</h3>
                    <table className="table-student">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.students.map((student, index)=>(
                            <tr key={student.id}>
                                <th>{index + 1}</th>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
export default Student;