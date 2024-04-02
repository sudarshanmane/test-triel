import CommonProductComponent from "./CommonProductComponent";

const Products = () => {
  return (
    <div>
      <CommonProductComponent
        title={"All Products"}
        storeEntityName={"allProducts"}
      ></CommonProductComponent>
    </div>
  );
};

export default Products;
