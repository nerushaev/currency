import { createSlice } from "@reduxjs/toolkit";

export const rates = createSlice({
  name: "rates",
  initialState: {},
  reducers: {
    setRates: (_, actions) => {
      return actions.payload;
    }
  }
})

export const { setRates }  = rates.actions;