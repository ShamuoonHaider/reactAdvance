import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./TodoSlice";
import { useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>TodoList</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && inputValue.trim()) {
            dispatch(addTodo(inputValue));
            setInputValue("");
          }
        }}
        className="border-2 text-2xl"
      />
      <button
        onClick={() => {
          if (inputValue.trim()) {
            dispatch(addTodo(inputValue));
            setInputValue("");
          }
        }}
      >
        Add
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => dispatch(removeTodo(index))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
