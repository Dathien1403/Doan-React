import React from "react";
import "./Comp.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about">
      <h3 className="title">một chút thông tin về cibus...</h3>

      <p className="sub-title">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book{" "}
      </p>

      <div className="bout-1">
        <div className="pic1">
          <img src="chef.jpg" width="230px" />
        </div>
        <div className="pic2">
          <img src="ham1.jpg" width="300px" />
        </div>
        <div className="pic3">
          <img src="farm.jpg" width="230px" />
        </div>
        <div className="pic4">
          <img src="coca3.jpg" width="230px" />
        </div>
        <div className="pic5">
          <img src="chicken.jpg" width="230px" />
        </div>
        <div className="pic6">
          <img src="ham2.jpg" width="350px" />
        </div>
      </div>

      <div className="bout-2">
        <div className="bout-2-grid">
          <img alt="sub" src="coca2.jpg" width="400px" className="bout-2-pic" />
          <div className="bout-2-flex">
            <img alt="sub" src="beef.jpg" width="200px" height="150px" />
            <img src="salad.jpg" width="200px" height="150px" />
            <img src="cheese.jpg" width="200px" height="150px" />
          </div>
          <p className="bout-2-content">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
      </div>

      <div className="bout-3">
        <img src="ham3.jpg" width="240px" />
        <img src="coca.jpg" width="200px" />
        <img src="ham4.jpg" width="200px" />
        <img src="pep.jpg" width="170px" />
      </div>

      <div className="bout-footer">
        <img src="log.png" />
        <div className="bout-footer-info">
          <p>
            <span style={{ fontWeight: "500" }}>Địa chỉ</span>: 123/4, tổ 5,
            phường 6, quận 7, TP Hồ Chí Minh
          </p>
          <p>
            <span style={{ fontWeight: "500" }}>Tel</span>: (012) 345 678 ~ 9
          </p>
          <p>
            <span style={{ fontWeight: "500" }}>Fax</span>: (012) 345 678 ~ 9
          </p>
          <p>
            <span style={{ fontWeight: "500" }}>Email</span>:
            cibus.contact@gmail.com
          </p>
        </div>
        <div className="bout-footer-form">
          <form>
            <label for="title">Gửi thông tin hỗ trợ</label>
            <br />
            <input
              className="form-control"
              type="text"
              id="email"
              name="email"
              placeholder="Nhập email của bạn"
            />{" "}
            <br />
            <input className="btn btn-primary" type="submit" value="Gửi" />
          </form>
        </div>
      </div>
    </div>
  );
}
