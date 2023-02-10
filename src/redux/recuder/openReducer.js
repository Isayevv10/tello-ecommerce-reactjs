import { createSlice } from "@reduxjs/toolkit";

const openSlice = createSlice({
  name: "open",
  initialState: {
    isOpen: false,
  },
  reducers: {
    setIsOpen: (state, { payload }) => {
      state.isOpen = payload;
      return state;
    },
  },
});

export const { setIsOpen } = openSlice.actions;
export const openReducer = openSlice.reducer;
