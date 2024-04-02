import { useSelector, useDispatch } from "react-redux";
import { setCart, setCartItems } from "./redux/ProductSlice";

const Card = ({ el, remove }) => {
  const dispatch = useDispatch();
  let count = useSelector((state) => state.products?.cart);

  const addToCart = (item) => {
    let index = 0;

    if (count[count?.length - 1]) {
      index = count[count?.length - 1].index + 1;
    }

    const el = { ...item, index: index };
    dispatch(setCartItems(el));
  };

  const removeFromCart = (el) => {
    let newCart = [];

    for (let index = 0; index < count.length; index++) {
      if (count[index].index !== el.index) {
        newCart.push(count[index]);
      }
    }
    dispatch(setCart(newCart));
  };

  return (
    <div className="flex flex-col items-center text-center justify-center">
      <img className="w-fit h-60" src={el?.image} alt="" />
      <div>{el?.title}</div>
      <div>{el?.price}</div>
      {!remove && <button onClick={() => addToCart(el)}> Add To Cart </button>}
      {remove && <button onClick={() => removeFromCart(el)}> Remove </button>}
    </div>
  );
};

export default Card;
