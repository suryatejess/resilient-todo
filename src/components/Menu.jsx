import React from "react";

const Menu = ({ displayMode, setDisplayMode }) => {
  return (
    <div>
      <h1>TodoList</h1>
      <button onClick={() => setDisplayMode("All")}>All</button>
      <button onClick={() => setDisplayMode("Done")}>Done</button>
      <button onClick={() => setDisplayMode("Todo")}>Todo</button>
    </div>
  );
};

export default Menu;
