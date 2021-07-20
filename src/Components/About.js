import React from "react";
import "./Comp.css";
import imgchef from "../assets/images/chef.jpg";
import imgham1 from "../assets/images/ham1.jpg";
import imgfarm from "../assets/images/farm.jpg";
import imgcoca3 from "../assets/images/coca3.jpg";
import imgchicken from "../assets/images/chicken.jpg";
import imgham2 from "../assets/images/ham2.jpg";
import imgcoca2 from "../assets/images/coca2.jpg";
import imgbeef from "../assets/images/beef.jpg";
import imgsalad from "../assets/images/salad.jpg";
import imgcheese from "../assets/images/cheese.jpg";
import imgham3 from "../assets/images/ham3.jpg";
import imgcoca from "../assets/images/coca.jpg";
import imgham4 from "../assets/images/ham4.jpg";
import imgpep from "../assets/images/pep.jpg";
import imglog from "../assets/images/log.png";
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
          <img alt="imgchef" src={imgchef} width="230px" />
        </div>
        <div className="pic2">
          <img alt="imgham1" src={imgham1} width="300px" />
        </div>
        <div className="pic3">
          <img alt="imgfarm" src={imgfarm} width="230px" />
        </div>
        <div className="pic4">
          <img alt="imgcoca3" src={imgcoca3} width="230px" />
        </div>
        <div className="pic5">
          <img alt="imgchicken" src={imgchicken} width="230px" />
        </div>
        <div className="pic6">
          <img alt="imgham2" src={imgham2} width="350px" />
        </div>
      </div>

      <div className="bout-2">
        <div className="bout-2-grid">
          <img
            alt="imgcoca2"
            src={imgcoca2}
            width="400px"
            className="bout-2-pic"
          />
          <div className="bout-2-flex">
            <img alt="imgbeef" src={imgbeef} width="200px" height="150px" />
            <img alt="imgsalad" src={imgsalad} width="200px" height="150px" />
            <img
              alt="imgcheese"
              src={imgcheese}
              width="200px"
              height="150px"
            />
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
        <img alt="imgham3" src={imgham3} width="240px" />
        <img alt="imgcoca" src={imgcoca} width="200px" />
        <img alt="imgham4" src={imgham4} width="200px" />
        <img alt="imgpep" src={imgpep} width="170px" />
      </div>

      <div className="bout-footer">
        <img alt="imglog" src={imglog} />
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
            <input class="btn btn-primary" type="submit" value="Gửi" />
          </form>
        </div>
      </div>
    </div>
  );
}
