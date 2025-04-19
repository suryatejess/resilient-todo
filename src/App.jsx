import { useState } from "react";
import AddNewTask from "./components/AddNewTask";
import IndividualTask from "./components/IndividualTask";
import Menu from "./components/Menu";
import DeleteMany from "./components/DeleteMany";

// useState [] to track the list of list of tasks
// a map method which will generate an Individual task for each of the specified in the state variable array

function App() {
  const [tasksList, setTasksList] = useState([]);

  const deleteHandler = (id) => {
    setTasksList((prevState) => {
      console.log(prevState.filter((task) => id !== task.id));
      return prevState.filter((task) => id !== task.id);
    });
  };

  const editHandler = (id, newTaskName) => {
    setTasksList((prevState) => {
      return prevState.map((task) => {
        console.log(task.id);
        console.log(id);
        console.log(newTaskName);
        if (task.id === id) {
          return { ...task, name: newTaskName };
        }
        return task;
      });
    });
  };

  return (
    <>
      <h1>TodoInput</h1>
      <AddNewTask tasksList={tasksList} setTasksList={setTasksList} />
      <Menu />

      {tasksList.map((task) => {
        return (
          <IndividualTask
            key={task.id}
            taskId={task.id}
            taskName={task.name}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
          />
        );
      })}

      <DeleteMany />
    </>
  );
}

export default App;
