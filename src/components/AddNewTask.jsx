import { useState } from "react";

export default function AddNewTask({ tasksList, setTasksList }) {
  // const [tasksList, setTasksList] = useState([]);
  const [taskName, setTaskName] = useState("");

  const handleSubmit = () => {
    event.preventDefault();

    if (taskName.trim() == "") return;

    const newTask = {
      id: crypto.randomUUID(),
      name: taskName,
      status: "unfinished",
    };

    setTasksList((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      console.log(updatedTasks);
      return updatedTasks;
    });

    // console.log(tasksList);

    setTaskName("");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="i m an input box"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          ></input>

          <input type="submit" value="Add new task" />
        </form>
      </div>
    </>
  );
}
