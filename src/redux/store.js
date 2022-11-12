import { configureStore } from "@reduxjs/toolkit";
import { rates } from "./slice";

export const store = configureStore({
  reducer: {
    rates: rates.reducer,
  }
})