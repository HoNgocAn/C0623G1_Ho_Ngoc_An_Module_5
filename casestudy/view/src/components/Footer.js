import React from "react";
import resort from "../img/resort.jpg"

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 ">
                        <div className="card-body">
                            <h3 className="card-title">Hướng Dẫn Di Chuyển</h3>
                            <p className="card-text">Khu nghỉ dưỡng Furama là cơ sở hàng đầu để khám phá một trong
                                những điểm đến hấp dẫn nhất Châu Á. Chỉ cách Đà Nẵng một quãng lái xe ngắn là bốn Di
                                sản Văn hóa Thế giới được UNESCO công nhận:</p>
                            <a href="#" className="btn btn-primary btn-with-arrow js-footer-map-toggle"><span><i
                                className="icon-placeholder"></i></span><span>Xem Trên Bản Đồ</span></a>
                            <h5>Địa điểm</h5>

                            <table className="place-table">
                                <tbody>
                                <tr>
                                    <td>1.</td>
                                    <td>Cố đô Huế</td>
                                    <td className="text-right"><span>2 tiếng</span></td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>Phố cổ Hội An</td>
                                    <td className="text-right"><span>30 phút</span></td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>Thánh địa Mỹ Sơn</td>
                                    <td className="text-right"><span>90 phút</span></td>
                                </tr>
                                <tr>
                                    <td>4.</td>
                                    <td>Động Phong Nha</td>
                                    <td className="text-right"><span>3 tiếng</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="card">
                            <img src={resort} alt="Không hiện thị được"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;