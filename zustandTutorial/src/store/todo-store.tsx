import { create } from "zustand";

interface Todo {
  id: number;
  text: string;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (todo: Todo) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (todo) => {
    set((state) => ({ todos: [...state.todos, todo] }));
  },
  removeTodo: () => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== todo.id),
    }));
  },
}));
