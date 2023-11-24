import React from "react";

function ListService() {
    const service = [
        {
            id: 1,
            name: "Villa",
            area: "200m2",
            expense: 2000000,
            person: 20,
            rentalType: "Ngày",
            roomStar: "Tốt",
            tool: "Có view đẹp",
            pool: "50m2",
            floor: 3,
            otherServices : null
        },
    ];

    return (
        <div className="container ">
            <h2>Danh sách dịch vụ</h2>
            <table className="table table-success table-striped">
                <thead>
                <tr>
                    <th scope="col">Tên dịch vụ</th>
                    <th scope="col">Diện tích sử dụng</th>
                    <th scope="col">Chi phí thuê</th>
                    <th scope="col">Số lượng người tối đa</th>
                    <th scope="col">Kiểu thuê</th>
                    <th scope="col">Tiêu chuẩn phòng</th>
                    <th scope="col">Mô tả tiện nghi khác</th>
                    <th scope="col">Diện tích hồ bơi</th>
                    <th scope="col">Số tầng</th>
                    <th scope="col">Dịch vụ miễn phí đi kèm</th>
                    <th scope="col" colSpan="2">Thao tác</th>
                </tr>
                </thead>
                <tbody className="table-group-divider">
                {service.map(item =>
                <tr key={item.id}>
                    <th scope="row">{item.name}</th>
                    <td>{item.area}</td>
                    <td>{item.expense}</td>
                    <td>{item.person}</td>
                    <td>{item.rentalType}</td>
                    <td>{item.roomStar}</td>
                    <td>{item.tool}</td>
                    <td>{item.pool}</td>
                    <td>{item.floor}</td>
                    <td>{item.otherServices}</td>
                    <td>
                        <button type="button" className="btn btn-primary" onClick="editService()">Sửa</button>
                        <button type="button" className="btn btn-danger" onClick="">Xóa</button>
                    </td>
                </tr>
                )}
                </tbody>
            </table>
     </div>
    );
}

export default ListService;
