import { useState } from "react";
import { useTodoStore } from "../store/todo-store";

const TodoList = () => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const todos = useTodoStore((state) => state.todos);
  const [input, setInput] = useState("");
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const handleAddTodo = () => {
    if (input.trim()) {
      addTodo({ id: Date.now(), text: input });
      setInput("");
    }
  };

  const handleRemoveTodo = (id: number) => {
    const todoToRemove = todos.find((todo) => todo.id === id);
    if (todoToRemove) {
      removeTodo(todoToRemove);
    }
  };

  return (
    <section className="flex justify-center h-screen items-center">
      <div className="flex flex-col justify-center border-2 items-center p-10 rounded-2xl gap-10">
        <div className="flex">
          <input
            type="text"
            placeholder="Enter your todos"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border-2 text-2xl px-4 py-2 rounded-lg"
          />
          <button
            className="bg-teal-300 text-2xl ml-10 py-2 px-4 rounded-lg cursor-pointer active:bg-teal-400"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
        <ul className="w-full text-2xl text-white">
          {todos.map((item) => (
            <li
              className="flex justify-between items-center bg-neutral-500 px-5 py-5 rounded-lg mb-10"
              key={item.id}
            >
              <span>{item.text}</span>
              <button
                className="bg-emerald-400 p-2 rounded-lg active:bg-emerald-600 cursor-pointer"
                onClick={() => handleRemoveTodo(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TodoList;
