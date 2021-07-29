import React, { useState, useEffect } from "react";
import { ProductItem } from "./ProductItems/ProductItem";
import { Card } from "../UI/Card";
import classes from "./Products.module.css";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, []);

  const shoppingProduct = product.map((item) => (
    <ul key={item.id} id={item.id} className={classes.productbox}>
      <ProductItem id={item.id} products={item} />
    </ul>
  ));
  return (
    <>
      <Card> {shoppingProduct}</Card>
    </>
  );
};

export default Products;
