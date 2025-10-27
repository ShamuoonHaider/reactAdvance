import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/TodoList/TodoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    // Add your reducers here
  },
});
