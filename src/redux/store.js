import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./action/CartSlice"; //apparently when importing the Slice file(CartSlice) we can change the variable name. doesn't need to be the same as what you put on the file when exporting
import ProductFilterReducer from "./action/ProductFilterSlice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
    productFilter: ProductFilterReducer,
  },
});

export default store;
