import React from "react";

function ListContract(){
    const contract = [
        {
            id : 1,
            number : 1,
            startDay: "01/01/2022",
            endDay: "01/02/2022",
            deposit: 1000000,
            totalMoney: 3000000,
        },
        {
            id : 2,
            number : 2,
            startDay: "05/01/2022",
            endDay: "05/02/2022",
            deposit: 1500000,
            totalMoney: 4000000,
        },
        {
            id : 3,
            number : 3,
            startDay: "10/02/2022",
            endDay: "20/02/2022",
            deposit: 1200000,
            totalMoney: 2500000,
        },
    ]
    return (
        <>
            <div className="container">
                <h2>Danh sách hợp đồng</h2><br></br>
                <table className="table table-primary">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Số hợp đồng</th>
                        <th scope="col">Ngày bắt đầu</th>
                        <th scope="col">Ngày kết thúc</th>
                        <th scope="col">Số tiền cọc trước</th>
                        <th scope="col">Tổng tiền thanh toán</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                    {contract.map((item,index) =>
                    <tr key={item.id}>
                        <th scope="row">{index+1}</th>
                        <td>{item.number}</td>
                        <td>{item.startDay}</td>
                        <td>{item.endDay}</td>
                        <td>{item.deposit}</td>
                        <td>{item.totalMoney}</td>
                    </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ListContract;