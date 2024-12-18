import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "All",
};

const ProductFilterSlice = createSlice({
  name: "filterProduct",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = ProductFilterSlice.actions;

export default ProductFilterSlice.reducer;
