import React from "react";
import {Field} from "formik";

function CreateContract(){
    return(
    <>
    <h3 className="mt-3">Tạo hợp đồng</h3>
    <form >
        <div className="mb-3">
            <label htmlFor="inputName" className="form-label">Số hợp dồng<span style="color: red;">(*)</span></label>
            <Field type="text" className="form-control" id="inputName"/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputStartDay" className="form-label">Ngày bắt đầu</label>
            <Field type="date" className="form-control" id="inputStartDay"/>
        </div>
        <div className="mb-3">
            <label htmlFor="inputEndDay" className="form-label">Ngày kết thúc</label>
            <Field type="date" className="form-control" id="inputEndDay"/>
        </div>
        <div className="mb-3">
            <label htmlFor="idDeposit" className="form-label">Tiền cọc trước</label>
            <Field type="text" className="form-control" id="idDeposit"/>
        </div>
        <div className="mb-3">
            <label htmlFor="totalMoney" className="form-label">Tổng số tiền thanh toán</label>
            <Field type="text" className="form-control" id="totalMoney"/>
        </div>


        <button type="submit" className="btn btn-primary">Thêm mới</button>
    </form>
    </>
    )
}
export default CreateContract;
