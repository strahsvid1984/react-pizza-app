import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async () => (await axios.get("http://localhost:3000/db.json")).data.pizzas
);

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    listOfPizzas: [],
    orderSum: 0,
    orderCount: 0,
    orderPizzas: [],
    status: null,
    error: null,
  },
  reducers: {
    addOrderSum: (state, action) => {
      state.orderSum += action.payload;
    },
    addOrderCount: (state, action) => {
      state.orderCount += action.payload;
    },
    addPizza: (state, action) => {
      state.orderPizzas.push(action.payload);
    },
  },

  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.listOfPizzas = action.payload;
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = "error";
      state.error = "Server error";
    },
  },
});

export const getOrderSum = (state) => state.cart.orderSum;
export const getOrderCount = (state) => state.cart.orderCount;
export const getOrderPizzas = (state) => state.cart.orderPizzas;
export const getListOfPizzas = (state) => state.cart.listOfPizzas;

export const { addOrderSum, addOrderCount } = cartSlice.actions;

export default cartSlice.reducer;
