import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { useState } from "react";

function TodoWrapper() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (todo) {
      setTodos([todo, ...todos]);
    }
  };
  return (
    <div className="w-full h-screen justify-center items-center bg-green-400 flex flex-col">
      <TodoForm addTodo={addTodo} />
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodoWrapper;
