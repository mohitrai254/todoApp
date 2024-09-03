/* eslint-disable react/prop-types */
import { useState } from "react";

function Todo({ todos, setTodos }) {
  const [isEditing, setIsEditing] = useState(null); // Track the index of the todo being edited
  const [editText, setEditText] = useState(""); // Track the current text being edited

  const handleDelete = (indexToRemove) => {
    const updatedTodos = todos.filter((_, index) => index !== indexToRemove);
    setTodos(updatedTodos);
  };

  const handleEdit = (index) => {
    setIsEditing(index); // Set the current todo index as the one being edited
    setEditText(todos[index]); // Initialize the edit text with the current todo text
  };

  const handleSave = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = editText; // Update the todo with the new text
    setTodos(updatedTodos);
    setIsEditing(null); // Reset editing state
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index} className="flex p-3">
          {isEditing === index ? (
            // Show input and save button if editing this todo
            <>
              <input
                className="p-1 m-1 rounded-lg"
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button
                className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-7"
                onClick={() => handleSave(index)}
              >
                Save
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-700 font-medium rounded-lg shadow-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
                onClick={() => setIsEditing(null)}
              >
                Cancel
              </button>
            </>
          ) : (
            // Show the todo text and edit/delete buttons
            <div className="flex items-center space-x-4 p-2 bg-blue-400 rounded-lg">
              <p>{todo}</p>
              <button
                className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Todo;
