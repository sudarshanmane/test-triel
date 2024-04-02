import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const Cart = () => {
  const products = useSelector((state) => state.products?.cart);
  const [pro, setPros] = useState();

  useEffect(() => {
    if (products) {
      setPros(
        products.map((element, key) => {
          return <Card key={key} el={element} remove={true}></Card>;
        })
      );
    }
  }, [products]);
  return <div>{pro}</div>;
};

export default Cart;
