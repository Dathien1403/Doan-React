import React from "react";
import ProductList from "../DB/ProductList";

const Product = ({ name, price, img }) => {
  return (
    <div className="product">
      <div className="product-item">
        <img src={img} width="200px" />
        <h3>{name}</h3>
        <h3>{price}</h3>
      </div>
    </div>
  );
};
export default Product;
