import React from "react";

function Header(){
    return (
        <>
            <header>
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <img src="../../img/logo@2x.png" alt="Không hiển thị được"/>
                    </div>
                    <div className="col-12 col-lg-3">
                        <img src="../../img/widget-tripadvisor-logo.png" alt="Không hiển thị được"/>
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
        </>
    )
}
export default Header;