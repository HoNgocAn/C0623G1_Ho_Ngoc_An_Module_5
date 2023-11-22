import React, {useState} from "react";
import {Formik} from "formik";

function Declare() {

    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    const [form, setForm] = useState({})

    function handleChange(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleValidate() {
        const errors = {};
        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
        }
        if (!form.name) {
            errors.name = "Required";
        }
        if (!form.idCard) {
            errors.idCard = "Required";
        }
        if (!form.birthyear) {
            errors.birthyear = "Required";
        } else if (form.birthyear < 1900) {
            errors.birthyear = "Must be greater than 1900";
        }
        if (!form.nationality) {
            errors.nationality = "Required";
        }
        if (!form.province) {
            errors.province = "Required";
        }
        if (!form.district) {
            errors.district = "Required";
        }
        if (!form.commune) {
            errors.commune = "Required";
        }
        if (!form.village) {
            errors.village = "Required";
        }
        if (!form.phone) {
            errors.phone = "Required";
        }


        return errors
    }

    function handleSubmit() {
        alert("Login in successfully!!!")
    }

    return (
        <div className="container">
            <h1>Tờ khai y tế</h1>
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
                            <label>Họ tên</label><br/>
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
                                errors.idCard ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Số hộ chiều/CCCD</label><br/>
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
                                errors.birthyear ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Năm sinh</label><br/>
                            <input
                                type="text"
                                name="birthyear"
                                value={form.birthyear || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.birthyear}</p>
                        </div>

                        <div>
                            <p>Giới tính</p>
                            <input name="gender" type="radio" value="Nam"/>Nam
                            <input name="gender" type="radio" value="Nữ"/>Nữ
                            <br/><br/>
                        </div>
                        <div>
                            <input name="gender" type="checkbox"/>Có bảo hiểm y tế
                            <br/><br/>
                        </div>

                        <div
                            className={`custom-input ${
                                errors.nationality ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Quốc tịch</label><br/>
                            <input
                                type="text"
                                name="nationality"
                                value={form.nationality || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.nationality}</p>
                        </div>

                        <div className="custom-input">
                            <label>Công ty Làm việc</label><br/>
                            <input
                                type="text"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="custom-input">
                            <label>Bộ phận làm việc</label><br/>
                            <input
                                type="text"
                                onChange={handleChange}
                            />
                        </div>

                        <h3>Địa chỉ liên lạc tại Việt Nam</h3>

                        <div
                            className={`custom-input ${
                                errors.province ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Tỉnh thành</label><br/>
                            <input
                                type="text"
                                name="province"
                                value={form.province || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.province}</p>
                        </div>

                        <div
                            className={`custom-input ${
                                errors.district ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Quận/Huyện</label><br/>
                            <input
                                type="text"
                                name="district"
                                value={form.district || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.district}</p>
                        </div>

                        <div
                            className={`custom-input ${
                                errors.commune ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Xã/Phường</label><br/>
                            <input
                                type="text"
                                name="commune"
                                value={form.commune || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.commune}</p>
                        </div>

                        <div
                            className={`custom-input ${
                                errors.village ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Số nhà, tổ dân phố, thôn, đội</label><br/>
                            <input
                                type="text"
                                name="village"
                                value={form.village || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.village}</p>
                        </div>

                        <div
                            className={`custom-input ${
                                errors.phone ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Số điện thoại</label><br/>
                            <input
                                type="number"
                                name="phone"
                                value={form.phone || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.phone}</p>
                        </div>

                        <div
                            className={`custom-input ${
                                errors.email ? "custom-input-error" : ""
                            }`}
                        >
                            <label>Email</label><br/>
                            <input
                                type="email"
                                name="email"
                                value={form.email || ""}
                                onChange={handleChange}
                            />
                            <p className="error">{errors.email}</p>
                        </div>
                        <div>
                            <h3>Trong vong 14 ngày qua anh/chị có đến quốc gia và vùng lãnh thổ nào(Có thể đi qua nhiều
                                quốc gia)</h3>
                            <input type="text" onChange={handleChange}/><br/>
                        </div>
                        <div>
                            <h3>Trong vong 14 ngày qua anh/chị có xuất hiện triệu chứng nào sau đay không</h3>
                            <input name="symptom" type="checkbox" onChange={handleChange}/>Sốt<br/>
                            <input name="symptom" type="checkbox" onChange={handleChange}/>Ho<br/>
                            <input name="symptom" type="checkbox" onChange={handleChange}/>Khó thở<br/>
                            <input name="symptom" type="checkbox" onChange={handleChange}/>Viêm phổi<br/>
                            <input name="symptom" type="checkbox" onChange={handleChange} />Đau họng<br/>
                            <input name="symptom" type="checkbox" onChange={handleChange}/>Mệt mỏi<br/>
                        </div>
                        <div>
                            <h3>Trong vong 14 ngày qua anh/chị có tiếp xúc với</h3>
                            <input name="contact" type="checkbox" onChange={handleChange}/>Người bệnh hoặc nghi ngờ mắc bệnh COVID-19<br/>
                            <input name="contact" type="checkbox" onChange={handleChange}/>Người từ nước có bệnh COVID-19<br/>
                            <input name="contact" type="checkbox" onChange={handleChange}/>Người có biểu hiện sốt, ho, khó thở<br/>
                        </div>
                        <br/>

                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Declare;