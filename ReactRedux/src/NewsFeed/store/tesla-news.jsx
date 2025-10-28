import { configureStore } from "@reduxjs/toolkit";
import teslaReducer from "../TeslaSlice";

export const store = configureStore({
  reducer: {
    tesla: teslaReducer,
  },
});
