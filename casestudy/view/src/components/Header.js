import React from "react";
import logo from "../img/logo.png";
import widget from "../img/widget.png";

function Header(){
    return (
        <div className="container">
            <header>
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <img src={logo} alt="Không hiển thị được"/>
                    </div>
                    <div className="col-12 col-lg-3">
                        <img src={widget} alt="Không hiển thị được"/>
                    </div>
                    <div className="col-12 col-lg-3">
                        <p>
                            Đ/c: 103 – 105 Đường Võ Nguyên Giáp, Phường Khuê Mỹ, Quận Ngũ hành Sơn, Tp. Đà Nẵng, Việt
                            Nam

                            7.0 km từ Sân bay Quốc tế Đà Nẵng</p>
                    </div>
                    <div className="col-12 col-lg-3">
                        <p>SĐT: 84-236-3847 333/888</p>
                        <p>Email: reservation@furamavietnam.com</p>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header;