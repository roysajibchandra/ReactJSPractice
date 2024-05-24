import React, { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
  };
  return (
    <div>
      <form className="flex flex-row items-center gap-4">
        <input
          className="border-black border rounded-lg mx-4 py-1"
          type="text"
          placeholder="Add Task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-slate-600 text-white rounded-lg  text-xl py-1 mx-2 px-1 hover:opacity-70 font-semibold"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Input;
