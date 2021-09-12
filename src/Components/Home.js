import React, { Component } from "react";
import { Link } from "react-router-dom";
class Home extends Component {
  render() {
    const style = {
      color: "white",
      fontSize: "30px",
    };
    const linkStyle = {
      color: "black",
      textDecoration: "none",
      paddingRight: "60px",
      fontSize: "20px",
    };
    return (
      <div>
        <div>
          <div className="header-main">
            <div className="circle">
              <div className="logo">
                <div className="logo">
                  <p style={style}>cibus</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="menu">
                  <Link style={linkStyle} to="/">
                    Trang chủ
                  </Link>
                  <Link style={linkStyle} to="/product">
                    Sản phẩm
                  </Link>
                  <Link style={linkStyle} to="/about">
                    Giới thiệu
                  </Link>
                  <Link style={linkStyle} to="/product">
                    Quản lý
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
