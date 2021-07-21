import React, { Component } from "react";
import imglog from "../assets/images/log.png";
class Footer extends Component {
  render() {
    return (
      <div>
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
}

export default Footer;
