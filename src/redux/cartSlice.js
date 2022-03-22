import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    orderSum: 0,
    orderCount: 0,
  },
  reducers: {
    addOrderSum: (state, action) => {
      state.orderSum += action.payload;
    },
  },
});

export const getOrderSum = (state) => state.cart.orderSum;
export const getOrderCount = (state) => state.cart.orderCount;

export const { addOrderSum } = cartSlice.actions;

export default cartSlice.reducer;
