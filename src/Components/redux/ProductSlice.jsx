import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products/slice",
  initialState: {
    cart: [],
    products: [],
  },
  reducers: {
    setCartItems(state, action) {
      state.cart.push(action.payload);
    },
    setCart(state, action) {
      state.cart = action.payload;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { setCartItems, setProducts, setCart } = productsSlice.actions;
export default productsSlice.reducer;
