import { createSlice } from "@reduxjs/toolkit";

//inital state of all the variables you want to track
const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [], // this will be initial state of the cart when the user first visits the store or refreshs the page. we will retrieve the cart info from localstorage if it contains any items.
  status: "",
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  //this reducer object is used to change the state of things inside the cart. for example when user add, delete items from the cart
  reducers: {
    addToCart: (state, action) => {
      //first check if the item is already in the cart, if it is just increase the item's count
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        //checks if the item is already in the cart, because if the item is not in the cart the itemIndex value would have been "-1"
        state.cart[itemIndex].quantity += 1;
      } else {
        const product = { ...action.payload, quantity: 1 };
        state.cart.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      const updateCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = updateCart;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    increamentProduct: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemIndex].quantity >= 1) {
        state.cart[itemIndex].quantity += 1;
      }
    },
    decrementProduct: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1;
      } else if (state.cart[itemIndex].quantity === 1) {
        const updateCart = state.cart.filter((p) => p.id !== action.payload.id);
        state.cart = updateCart;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

//all the reducer(method) we create here need to be exported to be used in other part of app
export const {
  addToCart,
  removeFromCart,
  increamentProduct,
  decrementProduct,
} = CartSlice.actions;

//we also need to export the entire reducer as well because this need to be connected to the store.js file
export default CartSlice.reducer;
