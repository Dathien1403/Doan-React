import React, { useState } from "react";
import Product  from "../Components/Product";
const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Hamburger Beef",
      price: "80.000",
      describe: "Very delicious",
      img: "ham3.jpg"
    },
    {
      id: 2,
      name: "Hamburger Chicken",
      price: "75.000",
      describe: "Very delicious",
      img:"ham4.jpg"
    },
    {
      id: 3,
      name: "Cocacola 500ml",
      price: "25.000",
      describe: "Very delicious",
    },
  ]);
  return(
      <div>
          {
          products.map(product => (
              <Product name={product.name} price={product.price} img={product.img}/>
          ))}
      </div>
  );
}
export default ProductList;
