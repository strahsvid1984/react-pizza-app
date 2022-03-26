import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchPizzas",
  async () => (await axios.get("http://localhost:3000/db.json")).data["pizzas"]
);

const checkForEquals = (list, block) => {
  const newList = list.filter(
    (i) =>
      i.name === block.name &&
      i.pizzaSize === block.pizzaSize &&
      i.pizzaDough === block.pizzaDough
  );

  if (newList.length === 0) {
    return -1;
  }

  return list.findIndex(
    (i) =>
      i.name === newList[0].name &&
      i.pizzaSize === newList[0].pizzaSize &&
      i.pizzaDough === newList[0].pizzaDough
  );
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    listOfPizzas: [],
    orderPizzas: [],
    orderSum: 0,
    orderCount: 0,
    status: null,
    error: null,
  },
  reducers: {
    addPizza: (state, action) => {
      const orderIndex = checkForEquals(state.orderPizzas, action.payload);

      orderIndex === -1 || orderIndex === undefined
        ? state.orderPizzas.push(action.payload)
        : (state.orderPizzas[orderIndex].count += 1);

      state.orderSum += action.payload.price;
      state.orderCount += 1;
    },

    minusLocalCount: (state, action) => {
      state.orderPizzas[action.payload].count -= 1;
      state.orderSum -= state.orderPizzas[action.payload].price;
      state.orderCount -= 1;

      if (state.orderPizzas[action.payload].count === 0) {
        state.orderPizzas.splice(action.payload, 1);
      }
    },

    addLocalCount: (state, action) => {
      state.orderPizzas[action.payload].count += 1;
      state.orderSum += state.orderPizzas[action.payload].price;
      state.orderCount += 1;
    },

    clearOrderItem: (state, action) => {
      state.orderSum -=
        state.orderPizzas[action.payload].price *
        state.orderPizzas[action.payload].count;

      state.orderCount -= state.orderPizzas[action.payload].count;
      state.orderPizzas.splice(action.payload, 1);
    },

    clearOrderPizza: (state) => {
      state.orderSum = 0;
      state.orderCount = 0;
      state.orderPizzas = [];
    },
  },

  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.listOfPizzas = action.payload;
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = "error";
      state.error = "Server error";
    },
  },
});

export const getOrderSum = (state) => state.cart.orderSum;
export const getOrderPizzas = (state) => state.cart.orderPizzas;
export const getListOfPizzas = (state) => state.cart.listOfPizzas;
export const getCount = (state) => state.cart.orderCount;

export const {
  addPizza,
  clearOrderPizza,
  minusLocalCount,
  addLocalCount,
  clearOrderItem,
} = cartSlice.actions;

export default cartSlice.reducer;
