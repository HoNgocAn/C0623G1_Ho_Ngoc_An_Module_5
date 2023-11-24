import React, {useState} from "react";
import {Formik} from "formik";


function EditService() {
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
        if (!form.area) {
            errors.area = "Không được để trống";
        }
        if (!form.expensive) {
            errors.expensive = "Không được để trống";
        }
        if (!form.person) {
            errors.person = "Không được để trống";
        }
        if (!form.rentalType) {
            errors.rentalType = "Không được để trống";
        }
        return errors
    }

    function handleSubmit() {
        alert("Đã thêm mới thành công")
    }

    return (
        <div>
            <h1>Chỉnh sửa dịch vụ</h1>
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
                                errors.area ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Diện tích sử dụng</label><br></br>
                            <input
                                type="text"
                                name="area"
                                value={form.area || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.area}</p>
                        </div>

                        <div
                            className={`custom-input ${
                                errors.expensive ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Chi phí thuê</label><br></br>
                            <input
                                type="text"
                                name="expensive"
                                value={form.expensive || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.expensive}</p>
                        </div>

                        <div
                            className={`custom-input ${
                                errors.person ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Số lượng người tối đa</label><br></br>
                            <input
                                type="number"
                                name="person"
                                value={form.person || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.person}</p>
                        </div>

                        <div
                            className={`custom-input ${
                                errors.rentalType ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Kiểu thuê</label><br></br>
                            <input
                                type="text"
                                name="rentalType"
                                value={form.rentalType || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.rentalType}</p>
                        </div>

                        <div className="custom-input">
                            <label>Tiêu chuẩn phòng</label><br/>
                            <input
                                type="text"
                                value="roomStar"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="custom-input">
                            <label>Mô tả tiện nghi khác</label><br/>
                            <input
                                type="text"
                                value="tool"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="custom-input">
                            <label>Diện tích hồ bơi</label><br/>
                            <input
                                type="text"
                                value="pool"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="custom-input">
                            <label>Số tầng</label><br/>
                            <input
                                type="number"
                                value="floor"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="custom-input">
                            <label>Dịch vụ miễn phí đi kèm</label><br/>
                            <input
                                type="number"
                                value="otherServices"
                                onChange={handleChange}
                            />
                        </div>


                        <button className="btn btn-primary" type="submit">Submit</button>

                    </form>
                )}
            </Formik>
        </div>
    )
}
export default EditService;
