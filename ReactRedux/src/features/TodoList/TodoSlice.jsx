import { createSlice } from "@reduxjs/toolkit";

const loadTodosFromLocalStorage = () => {
  try {
    const serializedTodos = localStorage.getItem("todos");
    if (serializedTodos === null) {
      return [];
    }
    return JSON.parse(serializedTodos);
  } catch (error) {
    console.error("Failed to load Todos from local storage: ", error);
  }
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: loadTodosFromLocalStorage(),
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo = [...state.todo, action.payload];
      localStorage.setItem("todos", JSON.stringify(state.todo));
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter((todo, index) => index !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todo));
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
