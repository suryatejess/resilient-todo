import React, { useState } from "react";

const IndividualTask = (props) => {
  // const [status, setStatus] = useState("unfinished");
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(props.taskName);
  const [tasksList, setTasksList] = [props.tasksList, props.setTasksList];

  const handleClick = (e) => {
    props.statusHandler(props.taskId);
    console.log(tasksList);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    props.editHandler(props.taskId, editValue);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={handleSave}>Save Edit</button>
        </>
      ) : (
        <>
          {/* displaying name [unstriked, and striked] */}
          {props.status === "finished" ? (
            <span>
              <strike>{props.taskName}</strike>
            </span>
          ) : (
            <span>{props.taskName}</span>
          )}
          <input
            type="checkbox"
            onChange={handleClick}
            checked={props.status === "finished"}
          ></input>
          <img
            src="./src/assets/pencil.svg"
            alt="pencil logo"
            width="20px"
            onClick={handleEdit}
          />
          <img
            src="./src/assets/bin.svg"
            alt="bin logo"
            width="20px"
            onClick={() => props.deleteHandler(props.taskId)}
          />
        </>
      )}
    </div>
  );
};

export default IndividualTask;
