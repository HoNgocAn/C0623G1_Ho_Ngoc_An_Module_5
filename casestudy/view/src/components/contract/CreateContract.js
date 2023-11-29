import React from "react";
import { useNavigate } from "react-router-dom";
import * as contractMethod from "../../method/ContractMethod";
import {toast} from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function CreateContract(){
    const navigate = useNavigate();
    const initValue = {
        number: 0,
        startDay: "",
        endDay: "",
        deposit:"",
        totalMoney:"",
    }
    const validateForm = {
        number : yup.string().required("Không được để trống trường này *"),
        startDay : yup.string().required("Không được để trống trường này *"),
        endDay : yup.string().required("Không được để trống trường này *"),
        deposit : yup.string().required("Không được để trống trường này *"),
        totalMoney : yup.string().required("Không được để trống trường này *"),
    };
    const createContract = (contract) => {
        let isSuccess = contractMethod.saveContract(contract);
        if (isSuccess) {
            toast.success("Thêm mới thành công!!!!!");
            navigate("/contract");
        }
        console.log("Thêm mới thất bại!!!");
    };
    return (
        <>
            <div className="container" style={{ marginTop: "6rem" }}>
                <h3 className="mt-3">Thêm mới hợp đồng</h3>
                <Formik initialValues={initValue}
                        onSubmit={(values)=>{
                            createContract(values);
                        }}
                        validationSchema={yup.object(validateForm)}>
                    <Form>

                        <div className="mb-3">
                            <label htmlFor="number" className="form-label">
                                Số hợp đồng<span style={{ color: "red" }}>(*)</span>
                            </label>
                            <Field type="number" name="number" className="form-control" id="number" />
                            <ErrorMessage
                                name="number"
                                component="span"
                                className="err-name"
                            ></ErrorMessage>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="startDay" className="form-label">
                                Ngày bắt đầu<span style={{ color: "red" }}>(*)</span>
                            </label>
                            <Field type="date" name="startDay" className="form-control" id="startDay" />
                            <ErrorMessage
                                name="startDay"
                                component="span"
                                className="err-name"
                            ></ErrorMessage>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="endDay" className="form-label">
                                Ngày kết thúc<span style={{ color: "red" }}>(*)</span>
                            </label>
                            <Field type="date" name="endDay" className="form-control" id="endDay" />
                            <ErrorMessage
                                name="endDay"
                                component="span"
                                className="err-name"
                            ></ErrorMessage>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="deposit" className="form-label">
                                Tiền đặt cọc<span style={{ color: "red" }}>(*)</span>
                            </label>
                            <Field type="text" name="deposit" className="form-control" id="deposit" />
                            <ErrorMessage
                                name="deposit"
                                component="span"
                                className="err-name"
                            ></ErrorMessage>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="totalMoney" className="form-label">
                                Tổng tiền<span style={{ color: "red" }}>(*)</span>
                            </label>
                            <Field type="text" name="totalMoney" className="form-control" id="totalMoney" />
                            <ErrorMessage
                                name="totalMoney"
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
export default CreateContract;
