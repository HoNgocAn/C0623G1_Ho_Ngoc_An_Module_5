import React, {Component} from 'react';

const studentList = [
    {
        id: 1,
        name: "Lê Văn A",
        phone: 94123238455,
        email: "lva@123"
    },
    {
        id: 2,
        name: "Lê Văn B",
        phone: 9412323666,
        email: "lvb@345"
    },
];

class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: studentList
        };
    }
    handleChange = (event) => {
        this.setState((state) => {
            const form = state.form
            form[event.target.name] = event.target.value
            return { form }
        }, () => this.checkInvalidForm())
    }
    handleSelect = (studentSelected, index) => {
        this.setState({
            form: JSON.parse(JSON.stringify(studentSelected)),
            indexSelected: index
        })
    }
    checkInvalidForm = () => {
        const { name, phone, email } = this.state.form
        const value = name && phone && email
        this.setState({
            isValid: value
        })
    }
    handleSubmit = () => {
        if(this.state.isValid){
            const newList = this.state.studentList
            if (this.state.indexSelected > -1) {

            } else {

            }
            this.setState()
        }
    }
    handleDelete = (index) => {
    }

    render() {
        const { studentList, form } = this.state
        return (
            <div className="container">
                <h1>Student List</h1>
                <form>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" value="name"  onChange={this.handleChange} />
                </div>
                <div>
                    <label>Phone: </label>
                    <input type="number" name="phone" value="phone" onChange={this.handleChange} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" name="email" value="email" onChange={this.handleChange} />
                </div>
                <button onClick={this.handleSubmit}>Submit</button>
                </form>
                <h2>Danh sách sinh viên</h2>
                <table className="student-list">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {studentList.map((item, index) =>
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

        )
    }

}

// function Student (){
//     const studentList = [
//         {
//             id : 1,
//             name: "Lê Văn A",
//             phone: 94123238455,
//             email:  "lva@123"
//         },
//         {
//             id : 2,
//             name: "Lê Văn B",
//             phone: 9412323666,
//             email:  "lvb@345"
//         },
//     ];
//
//
//     return (
//         <div className="container">
//             <h2>Danh sách sinh viên</h2>
//             <table className="student-list">
//                 <thead>
//                     <tr>
//                         <th>STT</th>
//                         <th>Tên</th>
//                         <th>Tuối</th>
//                         <th>Địa chỉ</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {studentList.map((item, index)=>
//                     <tr key={item.id}>
//                         <td>{index+1}</td>
//                         <td>{item.name}</td>
//                         <td>{item.age}</td>
//                         <td>{item.address}</td>
//                     </tr>
//                 )}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

export default Student;
