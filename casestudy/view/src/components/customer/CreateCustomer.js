import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import * as customerMethod from "../../method/CustomerMethod";
import {toast} from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function CreateCustomer(){

    const navigate = useNavigate();
    const initValue = {
        name: "",
        birthDay: "",
        gender: 0,
        idCard:"",
        numberPhone:"",
        email: "",
        typeGuest: "",
        address:""
    }
    const validateForm = {
        name : yup.string().required("Không được để trống trường này *"),
        birthDay : yup.string().required("Không được để trống trường này *"),
        idCard : yup.string().required("Không được để trống trường này *"),
        numberPhone : yup.string().required("Không được để trống trường này *"),
        email : yup.string().required("Không được để trống trường này *"),
        address : yup.string().required("Không được để trống trường này *"),
    };
    const createCustomer = (customer) => {
        let isSuccess = customerMethod.saveCustomer(customer);
        if (isSuccess) {
            toast.success("Thêm mới thành công!!!!!");
            navigate("/customer");
        }
        console.log("thêm mới thất bại!!!");
    };
    return (
        <>
            <div className="container" style={{ marginTop: "6rem" }}>
                <h3 className="mt-3">Thêm khách hàng</h3>
                <Formik initialValues={initValue}
                        onSubmit={(values)=>{
                            createCustomer(values);
                        }}
                        validationSchema={yup.object(validateForm)}>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Họ tên<span style={{ color: "red" }}>(*)</span>
                            </label>
                            <Field type="text" name="name" className="form-control" id="name" />
                            <ErrorMessage
                                name="name"
                                component="span"
                                className="err-name"
                            ></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="birthDay"  className="form-label">
                                Ngày sinh<span style={{ color: "red" }}>(*)</span>
                            </label>
                            <Field type="date" name="birthDay" className="form-control" id="date" />
                            <ErrorMessage
                                name="birthDay"
                                component="span"
                                className="err-name"
                            ></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputTool" className="form-label">
                                Giới tính
                            </label>
                            <div className="form-check form-check-inline">
                                <Field
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="inlineRadio1"
                                    value="1"
                                    checked
                                />
                                <label className="form-check-label" htmlFor="inlineRadio1">
                                    Nam
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="inlineRadio2"
                                    value="0"
                                />
                                <label className="form-check-label" htmlFor="inlineRadio2">
                                    Nữ
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="inlineRadio2"
                                    value="1"
                                />
                                <label className="form-check-label" htmlFor="inlineRadio2">
                                    Khác
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputIdCard" className="form-label">
                                Số định danh<span style={{ color: "red" }}>(*)</span>
                            </label>
                            <Field type="text" name="idCard" className="form-control" id="inputIdCard" />
                            <ErrorMessage
                                name="idCard"
                                component="span"
                                className="err-name"
                            ></ErrorMessage>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="inputPhoneNumber" className="form-label">
                                Số Điện Thoại<span style={{ color: "red" }}>(*)</span>
                            </label>
                            <Field type="text" name="numberPhone" className="form-control" id="inputPhoneNumber" />
                            <ErrorMessage
                                name="numberPhone"
                                component="span"
                                className="err-name"
                            ></ErrorMessage>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label">
                                Email<span style={{ color: "red" }}>(*)</span>
                            </label>
                            <Field type="text" name="email" className="form-control" id="inputEmail" />
                            <ErrorMessage
                                name="email"
                                component="span"
                                className="err-name"
                            ></ErrorMessage>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="typeCustomer" className="form-label">
                                Loại khách<span style={{ color: "red" }}>(*)</span>
                            </label>
                            <Field
                                className="form-select"
                                name="typeCustomer" component="select"
                                aria-label="Default select example"
                            >
                                <option selected="">Chọn loại khách</option>
                                <option value="1">Dinamond</option>
                                <option value="2">Thường</option>
                                <option value="3">None</option>
                            </Field>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputAddress" className="form-label">
                                Địa chỉ<span style={{ color: "red" }}>(*)</span>
                            </label>
                            <Field
                                type="text"
                                name="address"
                                className="form-control"
                                id="inputAddress"
                            />
                            <ErrorMessage
                                name="address"
                                component="span"
                                className="err-name"
                            ></ErrorMessage>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Xác nhận
                        </button>
                    </Form>
                </Formik>
            </div>
        </>
    );
}
export default CreateCustomer;