import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: false,
  reducers: {
    setIsLogged: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setIsLogged } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
