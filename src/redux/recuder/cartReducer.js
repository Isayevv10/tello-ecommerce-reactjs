import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    setCart1: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setCart1 } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
