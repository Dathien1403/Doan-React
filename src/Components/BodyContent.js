import React, { Component } from "react";
import imgham from "../assets/images/ham.png";
import imgcoke from "../assets/images/coke.png";
class BodyContent extends Component {
  render() {
    return (
      <div>
        <div className="body-main">
          <div className="body-content">
            <h1 className="bd-content-1">
              Khám phá nền <br /> ẩm thực hiện đại
            </h1>
            <p className="bd-content-2">
              Cuộc sống bận rộn nhưng <br /> bạn cần một bữa ăn đầy đủ dưỡng
              chất ?
            </p>
            <p className="bd-content-button">Khám phá ngay nào!!</p>
          </div>
          <div className="pic">
            <img
              alt="imgcoke"
              className="parents"
              src={imgcoke}
              width="450px"
            />
            <img alt="imgham" className="child" src={imgham} width="450px" />
          </div>
        </div>
      </div>
    );
  }
}

export default BodyContent;
