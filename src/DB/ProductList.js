import React, { useState } from "react";
import Product from "../Components/Product";

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Burger Beef",
      des: "Delicious",
      price: "15$",
      img: "ham.png",
    },
    {
      id: "2",
      name: "Burger Chicken",
      des: " Very Delicious",
      price: "25$",
      img: "ham.png",
    },
    {
      id: "3",
      name: "Burger Poke",
      des: " Really Delicious",
      price: "10$",
      img: "ham.png",
    },
    {
      id: "4",
      name: "Burger Duck",
      des: " Really Delicious",
      price: "10$",
      img: "ham.png",
    },
    {
      id: "5",
      name: "Cocacola",
      des: " Freaking Delicious",
      price: "5$",
      img: "coke.png",
    },
    {
      id: "6",
      name: "Pepsi",
      des: " Freaking Delicious",
      price: "5$",
      img: "coke.png",
    },
    {
      id: "7",
      name: "Fanta",
      des: " Freaking Delicious",
      price: "5$",
      img: "coke.png",
    },
    {
      id: "8",
      name: "Sprite",
      des: " Freaking Delicious",
      price: "5$",
      img: "coke.png",
    },
  ]);
  return (
    <div>
      {products.map((product) => (
        <Product name={product.name} price={product.price} img={product.img} des={product.des} />
      ))}
    </div>
  );
};
export default ProductList;
