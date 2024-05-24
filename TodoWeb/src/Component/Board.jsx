import React from "react";

const Board = ({ task, taskList, setTaskList, index }) => {
  const handleDelete = () => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTaskList((currentTask) =>
      currentTask.filter((todo) => index === removeIndex)
    );
  };
  return (
    <div className="max-w-md flex flex-col items-start justify-center border text-center text-lg pt-2 pb-4 px-4 md:px-6 rounded-xl">
      <p>{task}</p>
      <button
        className="bg-red-500 text-white rounded-lg py-1 px-2 mt-4"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default Board;
