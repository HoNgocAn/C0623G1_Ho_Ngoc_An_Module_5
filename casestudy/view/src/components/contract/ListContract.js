import React, {useState,useEffect} from "react";
import * as contractMethod from "../../method/ContractMethod"
import { toast } from "react-toastify";
import {Link} from "react-router-dom";

function ListContract(){
    const [contract, setContract] = useState([]);
    const [contractDelete, setContractDelete] = useState([]);

    useEffect(() => {
        getAll();
    },[]);

    const getAll = async () => {
        let data = await contractMethod.getAllContract();
        setContract(data);
    }

    const handlerContract = (contract) =>{
        setContractDelete(contract)
    }

    const deleteContract = async () =>{
        const isSuccess = await contractMethod.deleteContract(contractDelete.id);
        if (isSuccess){
            toast.error("Đã xóa thành công!!!!!");
            getAll();
        }
    }
    if (!contract) {
        return null;
    }

    return (
        <>
            <div className="container">
                <h2>Danh sách hợp đồng</h2><br/>
                <div className="text-end fst-italic">
                    <Link
                        class="nav-link active"
                        className="btn btn-success mb-3"
                        aria-current="page"
                        to="/contract-create"
                    >
                        Thêm hợp đồng
                    </Link>
                </div>
                <table className="table table-primary">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Số hợp đồng</th>
                        <th scope="col">Ngày bắt đầu</th>
                        <th scope="col">Ngày kết thúc</th>
                        <th scope="col">Số tiền cọc trước</th>
                        <th scope="col">Tổng tiền thanh toán</th>
                        <th scope="col">Thao tác</th>
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
                        <td>
                            <button
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                                className="btn btn-sm btn-danger rounded-0"
                                onClick={() => handlerContract(item)}
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
                                        Xóa hợp đồng
                                    </h1>
                                    <h5 className="modal-title text-danger fw-bold">
                                    </h5>
                                </div>
                            </div>
                            <div className="modal-body">
                                <h5>Bạn có chắc chắn xóa hợp đồng này không?</h5>
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
                                    onClick={deleteContract}
                                >
                                    Xác nhận
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListContract;