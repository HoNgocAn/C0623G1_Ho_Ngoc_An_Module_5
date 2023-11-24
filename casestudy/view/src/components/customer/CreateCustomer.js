import React, {useState} from "react";
import {Formik} from "formik";

function CreateCustomer(){

    const [form, setForm] = useState({})

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleValidate() {
        const errors = {};
        if (!form.name) {
            errors.name = "Không được để trống";
        }
        if (!form.birthday) {
            errors.birthday = "Không được để trống";
        }
        if (!form.gender) {
            errors.gender = "Không được để trống";
        }
        if (!form.idCard) {
            errors.idCard = "Không được để trống";
        }
        if (!form.numberPhone) {
            errors.numberPhone = "Không được để trống";
        }
        if (!form.email) {
            errors.email = "Không được để trống";
        }
        if (!form.typeGuest) {
            errors.typeGuest = "Không được để trống";
        }
        if (!form.address) {
            errors.address = "Không được để trống";
        }
        return errors
    }

    function handleSubmit() {
        alert("Đã thêm mới thành công")
    }

    return (
        <div>
            <h1>Thêm mới khách hàng</h1>
            <Formik
                initialValues={form}
                validate={handleValidate}
                onSubmit={handleSubmit}>
                {({errors, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div
                            className={`custom-input ${
                                errors.name ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Tên</label><br></br>
                            <input
                                type="text"
                                name="name"
                                value={form.name || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.name}</p>
                        </div>

                        <div
                            className={`custom-input ${
                                errors.birthday ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Ngày sinh</label><br></br>
                            <input
                                type="date"
                                name="birthday"
                                value={form.birthday || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.birthday}</p>
                        </div>

                        <div
                            className={`custom-input ${
                                errors.gender ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Giới tính</label><br></br>
                            <input
                                type="text"
                                name="gender"
                                value={form.gender || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.gender}</p>
                        </div>

                        <div
                            className={`custom-input ${
                                errors.idCard ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Số đinh danh cá nhân</label><br></br>
                            <input
                                type="text"
                                name="idCard"
                                value={form.idCard || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.idCard}</p>
                        </div>

                        <div
                            className={`custom-input ${
                                errors.numberPhone ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Số điện thoại</label><br></br>
                            <input
                                type="text"
                                name="numberPhone"
                                value={form.numberPhone || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.numberPhone}</p>
                        </div>

                        <div
                            className={`custom-input ${
                                errors.email? "custom-input-error" : ""
                            }`}
                        >
                            <label>Email</label><br></br>
                            <input
                                type="email"
                                name="email"
                                value={form.email || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.email}</p>
                        </div>

                        <div
                            className={`custom-input ${
                                errors.typeGuest? "custom-input-error" : ""
                            }`}
                        >
                            <label>Loại khách hàng</label><br></br>
                            <input
                                type="text"
                                name="typeGuest"
                                value={form.email || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.typeGuest}</p>
                        </div>

                        <div
                            className={`custom-input ${
                                errors.address? "custom-input-error" : ""
                            }`}
                        >
                            <label>Địa chỉ</label><br></br>
                            <input
                                type="text"
                                name="address"
                                value={form.address || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.address}</p>
                        </div>
                        <button className="btn btn-primary" type="submit">Submit</button>

                    </form>
                )}
            </Formik>
        </div>
    )
}
export default CreateCustomer;