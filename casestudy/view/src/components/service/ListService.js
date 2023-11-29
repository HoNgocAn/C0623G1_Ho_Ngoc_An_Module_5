import React, {useState, useEffect} from "react";
import * as serviceMethod from "../../method/ServiceMethod";
import { toast } from "react-toastify";
import {Routes, Route,Link} from "react-router-dom";

function ListService() {

    const [service, setService] = useState([]);
    const [serviceDelete, setServiceDelete] = useState([]);

    useEffect(() => {
        getAll();
    }, []);

    const getAll = async () =>{
        let data = await serviceMethod.getAllService();
        setService(data)
    }
    const handlerService = (customer) => {
        setServiceDelete(customer)
    }
    const deleteService = async () =>{
        const isSuccess = await serviceMethod.deleteService(serviceDelete.id)
        if (isSuccess){
            toast.error("Đã xóa thành công!!!");
            getAll();
        }
    }
    if (!service){
        return null;
    }

    return (
        <div className="container ">
            <h2>Danh sách dịch vụ</h2><br/>
            <div className="text-end fst-italic">
                <Link
                    class="nav-link active"
                    className="btn btn-success mb-3"
                    aria-current="page"
                    to="/service-create"
                >
                    Thêm dịch vụ
                </Link>
            </div>
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
                        <button
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            className="btn btn-sm btn-danger rounded-0"
                            onClick={() => handlerService(item)}
                        >
                            Xóa
                        </button>
                    </td>
                </tr>
                )}
                </tbody>
            </table>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content text-center">
                        <div className="modal-header justify-content-center">
                            <div>
                                <h1
                                    className="modal-title text-danger fs-4"
                                    id="exampleModalLabel"
                                >
                                    Xóa dịch vụ
                                </h1>
                                <h5 className="modal-title text-danger fw-bold">
                                </h5>
                            </div>
                        </div>
                        <div className="modal-body">
                            <h5>Bạn có chắc chắn xóa dịch vụ  không?</h5>
                            Hành dộng này không thể hoàn tác!
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-sm btn-secondary rounded-0"
                                data-bs-dismiss="modal"
                            >
                                Đóng
                            </button>
                            <button
                                type="button"
                                className="btn btn-sm btn-danger rounded-0"
                                data-bs-dismiss="modal"
                                onClick={deleteService}
                            >
                                Xác nhận
                            </button>
                        </div>
                    </div>
                </div>
            </div>
     </div>
    );
}

export default ListService;
