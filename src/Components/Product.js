import React from "react";

const Product = ({ name, price, img, des }) => {
  return (
    <div className="product">
      <div className="product-item">
        <img src={img} width="200px" />
        <h3>{name}</h3>
        <p>{des}</p>
        <h3>{price}</h3>
        <a href="/product">+</a>
      </div>
    </div>
  );
};
export default Product;
