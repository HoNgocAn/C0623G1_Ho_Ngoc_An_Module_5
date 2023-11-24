import React from "react";

function ListCustomer(){
    const customer = [
        {
            id: 1,
            name: "Lê Văn A",
            birthday: "10/01/2000",
            gender: "Nam",
            idCard: "045123456123",
            numberPhone: "0978666543",
            email: "lva@123",
            typeGuest: "Member",
            address: "Đà Nẵng",
        },
        {
            id: 2,
            name: "Lê Văn B",
            birthday: "01/01/2001",
            gender: "Nam",
            idCard: "045123098786",
            numberPhone: "0986776544",
            email: "lvb@456",
            typeGuest: "Member",
            address: "Hà Nội",
        },
        {
            id: 3,
            name: "Trần Thị C",
            birthday: "01/01/2002",
            gender: "Nữ",
            idCard: "047443558786",
            numberPhone: "0935776354",
            email: "ttc@123",
            typeGuest: "Diamond",
            address: "Sài Gòn",
        },
    ];
    return (
        <>
        <div className="container">
            <h2>Danh sách khách hàng</h2>
            <table className="table table-success table-striped">
                <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Họ tên</th>
                    <th scope="col">Ngày sinh</th>
                    <th scope="col">Giới tính</th>
                    <th scope="col">Số ĐDCN</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Email</th>
                    <th scope="col">Loại khách</th>
                    <th scope="col">Địa chỉ</th>
                    <th scope="col" colSpan="2">Thao tác</th>
                </tr>
                </thead>
                <tbody className="table-group-divider">
                {customer.map((item,index) =>
                <tr key={item.id}>
                    <th scope="row">{index+1}</th>
                    <td>{item.name}</td>
                    <td>{item.birthday}</td>
                    <td>{item.gender}</td>
                    <td>{item.idCard}</td>
                    <td>{item.numberPhone}</td>
                    <td>{item.email}</td>
                    <td>{item.typeGuest}</td>
                    <td>{item.address}</td>
                    <td>
                        <button type="button" className="btn btn-primary" onClick="editService()">Sửa</button>
                        <button type="button" className="btn btn-danger" onClick="">Xóa</button>
                    </td>
                </tr>
                )};
                </tbody>
            </table>
        </div>
        </>
    )
}
export default ListCustomer;