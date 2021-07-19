import React from "react";
import "./Comp.css";
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
          <img alt="imgchef" src="chef.jpg" width="230px" />
        </div>
        <div className="pic2">
          <img alt="imgham1" src="ham1.jpg" width="300px" />
        </div>
        <div className="pic3">
          <img alt="imgfarm" src="farm.jpg" width="230px" />
        </div>
        <div className="pic4">
          <img alt="imgcoca3" src="coca3.jpg" width="230px" />
        </div>
        <div className="pic5">
          <img alt="imgchicken" src="chicken.jpg" width="230px" />
        </div>
        <div className="pic6">
          <img alt="imgham2" src="ham2.jpg" width="350px" />
        </div>
      </div>

      <div className="bout-2">
        <div className="bout-2-grid">
          <img
            alt="imgcoca2"
            src="coca2.jpg"
            width="400px"
            className="bout-2-pic"
          />
          <div className="bout-2-flex">
            <img alt="imgbeef" src="beef.jpg" width="200px" height="150px" />
            <img alt="imgsalad" src="salad.jpg" width="200px" height="150px" />
            <img
              alt="img cheese"
              src="cheese.jpg"
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
        <img alt="imgham3" src="ham3.jpg" width="240px" />
        <img alt="imgcoca" src="coca.jpg" width="200px" />
        <img alt="imgham4" src="ham4.jpg" width="200px" />
        <img alt="imgpep" src="pep.jpg" width="170px" />
      </div>

      <div className="bout-footer">
        <img alt="imglog" src="log.png" />
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
