import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./ProductSlice";

export const store = configureStore({
  reducer: { products: productsSlice },
});
