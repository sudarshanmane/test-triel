import { useEffect, useState } from "react";
import { urls } from "../utils";
import Card from "./Card";
import { getProducts } from "./redux/axios";
import { setProducts } from "./redux/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

const CommonProductComponent = ({ title, storeEntityName }) => {
  const dispatch = useDispatch();

  const getProductsFun = async () => {
    console.log("storeEntityName", storeEntityName, urls[storeEntityName]);
    let res = await getProducts(urls[storeEntityName]);

    if (res) {
      dispatch(setProducts(res.data));
    }
  };

  useEffect(() => {
    getProductsFun();
  }, []);

  const products = useSelector((state) => state.products?.products);
  const [pro, setPros] = useState();

  useEffect(() => {
    if (products) {
      setPros(
        products.map((element, key) => {
          return <Card key={key} el={element}></Card>;
        })
      );
    }
  }, [products]);
  return (
    <div>
      <div>{title}</div>
      {pro && <div className="grid grid-cols-4 gap-5 ">{pro}</div>}
    </div>
  );
};

export default CommonProductComponent;
