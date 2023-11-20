import React from "react";
import {Field} from "formik";

function EditCustomer(){
    return (
        <>
        <h3 className="mt-3">Cập nhật thông tin khách hàng</h3>
            <form>
                <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">Họ tên<span style="color: red;">(*)</span></label>
                    <Field type="text" className="form-control" id="inputName"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputBirthday" className="form-label">Ngày sinh</label>
                    <Field type="date" className="form-control" id="inputBirthday"/>
                </div>

                <div className="mb-3">
                    <label className="form-label" className="form-label">Giới tính</label>
                    <select className="form-select" aria-label="Default select example">
                        <option value="2">Nam</option>
                        <option value="3">Nữ</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputTool" className="form-label">Tiện ích khác</label>
                    <Field type="text" className="form-control" id="inputTool"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="idCard" className="form-label">Số định danh cá nhân</label>
                    <Field type="text" className="form-control" id="idCard"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="numberPhone" className="form-label">Số điện thoại</label>
                    <Field type="text" className="form-control" id="numberPhone"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <Field type="text" className="form-control" id="email"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Loại khách <span style="color: red;">(*)</span></label>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Chọn loại khách</option>
                        <option value="1">Diamond</option>
                        <option value="2">Platinum</option>
                        <option value="3">Gold</option>
                        <option value="4">Silver</option>
                        <option value="5">Member</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAddress" className="form-label">Địa chỉ<span
                        style="color: red;">(*)</span></label>
                    <Field type="text" className="form-control" id="inputAddress"/>
                </div>
                <button type="submit" className="btn btn-primary">Cập nhật</button>
            </form>
        </>
    )
}
export default EditCustomer;