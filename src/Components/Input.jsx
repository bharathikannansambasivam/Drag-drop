import React, { useState } from "react";

function Input({ onSubmit }) {
  const [task, setTask] = useState("");

  const handleSubmit = () => {
    onSubmit(task);
    setTask("");
  };
  return (
    <div className="">
      <input
        className=" border-2 mb-4 p-2 "
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button
        onClick={handleSubmit}
        className="ml-9 p-3 bg-blue-500 text-white rounded-md px-6 font-bold hover:bg-green-600 transform transition hover:scale-105  duration-300 ease-in-out "
      >
        Add
      </button>
    </div>
  );
}

export default Input;
