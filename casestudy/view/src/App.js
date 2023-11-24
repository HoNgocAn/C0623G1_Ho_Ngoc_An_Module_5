import logo from "./img/logo.png";
import './App.css';
import widget from "./img/widget.png";
import resort from "./img/resort.jpg";
import React from "react";

import { Routes, Route, Link } from "react-router-dom";
import ListCustomer from "./components/customer/ListCustomer";
import ListService from "./components/service/ListService";
import ListContract from "./components/contract/ListContract";
import Home from "./components/home/Home";


function App() {
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
          <nav>
              <div className="px-3 py-2 bg-dark text-white">
                  <div className=" align-items-center justify-content-center justify-content-lg-start">
                      <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                          <li>
                              <a href="#" className="nav-link text-white">
                                  <svg className="bi d-block mx-auto mb-1" width="24" height="24">

                                  </svg>
                                  GIỚI THIỆU
                              </a>
                          </li>
                          <li>
                              <a href="#" className="nav-link text-white">
                                  <svg className="bi d-block mx-auto mb-1" width="24" height="24">

                                  </svg>
                                  <Link to="/customer">KHÁCH HÀNG</Link>
                              </a>
                          </li>
                          <li>
                              <a href="#" className="nav-link text-white">
                                  <svg className="bi d-block mx-auto mb-1" width="24" height="24">

                                  </svg>
                                  <Link to="/service">DỊCH VỤ</Link>
                              </a>
                          </li>
                          <li>
                              <a href="#" className="nav-link text-white">
                                  <svg className="bi d-block mx-auto mb-1" width="24" height="24">

                                  </svg>
                                  <Link to="/contract">HỢP ĐỒNG</Link>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/customer" element={<ListCustomer/>} />
              <Route path="/service" element={<ListService/>} />
              <Route path="/contract" element={<ListContract />} />
          </Routes>
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
       </div>
  )
}

export default App;
