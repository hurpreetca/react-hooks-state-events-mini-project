import React from "react";

function Task({ category, text, handleRemoveButton }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => handleRemoveButton(text)}>
        X
      </button>
    </div>
  );
}

export default Task;
