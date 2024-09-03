/* eslint-disable react/prop-types */
import { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
  };

  return (
    <div className="w-full h-screen mt-4 items-center bg-green-400 flex flex-col">
      <h1 className="text-3xl font-sans space-x-2">To be done...</h1>
      <form className="" onSubmit={handleSubmit}>
        <input
          className="p-2 m-2 rounded-lg"
          type="text"
          placeholder="What is the task today?"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button
          className="border-2 border-red-500 hover:bg-blue-500 rounded-md p-1 m-2"
          type="submit"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
