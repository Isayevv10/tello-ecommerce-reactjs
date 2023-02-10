import { configureStore } from "@reduxjs/toolkit";
import { openReducer } from "../recuder/openReducer";
import { loginReducer } from "../recuder/loginReducer";
import { cartReducer } from "../recuder/cartReducer";

export const store = configureStore({
  reducer: {
    isOpen: openReducer,
    logged: loginReducer,
    cart1: cartReducer,
  },
});
