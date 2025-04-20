import React from "react";

const DeleteMany = ({ tasksList, setTasksList }) => {
  // handleDeleteDoneTasks
  const handleDeleteDoneTasks = () => {
    const updatedTasksList = tasksList.filter(
      (task) => task.status !== "finished"
    );
    setTasksList(updatedTasksList);
  };
  const handleDeleteAllTasks = () => setTasksList([]);

  return (
    <div>
      <button onClick={handleDeleteDoneTasks}>Delete Done tasks</button>
      <button onClick={handleDeleteAllTasks}>Delete all tasks</button>
    </div>
  );
};

export default DeleteMany;
