import { useState, useEffect } from "react";
import AddNewTask from "./components/AddNewTask";
import IndividualTask from "./components/IndividualTask";
import Menu from "./components/Menu";
import DeleteMany from "./components/DeleteMany";

// useState [] to track the list of list of tasks
// a map method which will generate an Individual task for each of the specified in the state variable array

function App() {
  let browserFetch = localStorage.getItem("myTasks");
  if (browserFetch) {
    browserFetch = JSON.parse(browserFetch);
  }
  const [tasksList, setTasksList] = useState(browserFetch || []);
  const [displayMode, setDisplayMode] = useState("All");

  useEffect(() => {
    // convert tasksList into JSON string
    // set that into local storage
    // create a new time stamp and then save it too.

    const tasksListJsonString = JSON.stringify(tasksList);
    localStorage.setItem("myTasks", tasksListJsonString);
    console.log("hii i rendered");
    console.log(tasksListJsonString);
  });

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

  const statusHandler = (id) => {
    setTasksList((prevState) => {
      return prevState.map((task) => {
        // finding the particular task
        if (task.id === id) {
          // toggling the state using if else again
          if (task.status == "unfinished") {
            return { ...task, status: "finished" };
          } else {
            return { ...task, status: "unfinished" };
          }
        }
        return task;
      });
    });
  };

  // handling display mode
  let temp = null;
  if (displayMode == "Todo") {
    temp = tasksList.filter((tempTask) => tempTask.status == "unfinished");
  } else if (displayMode == "Done") {
    temp = tasksList.filter((tempTask) => tempTask.status == "finished");
  } else {
    temp = tasksList;
  }

  const tasksToShowUp = temp.map((task) => {
    return (
      <IndividualTask
        key={task.id}
        taskId={task.id}
        taskName={task.name}
        status={task.status}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
        tasksList={tasksList}
        setTasksList={setTasksList}
        statusHandler={statusHandler}
      />
    );
  });

  return (
    <>
      <h1>TodoInput</h1>
      <AddNewTask tasksList={tasksList} setTasksList={setTasksList} />
      <Menu displayMode={displayMode} setDisplayMode={setDisplayMode} />

      {tasksToShowUp}

      <DeleteMany />
    </>
  );
}

export default App;
