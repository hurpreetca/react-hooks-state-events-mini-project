import React from "react";
import Task from "./Task";

function TaskList({ tasks, setNewTasks, selectedCategory }) {
  function handleRemoveButton(event) {
    setNewTasks(
      tasks.filter((task) => {
        return task.text !== event.target.parentElement.children[1].innerText;
      })
    );
  }
  const taskByCategory = tasks.filter((task) => {
    if (selectedCategory === "All") {
      return true;
    }
    if (selectedCategory === "") {
      return true;
    }
    return task.category === selectedCategory;
  });
  const taskDisplay = taskByCategory.map((task) => {
    return (
      <Task
        key={task.text}
        category={task.category}
        text={task.text}
        handleRemoveButton={handleRemoveButton}
      ></Task>
    );
  });

  return <div className="tasks">{taskDisplay}</div>;
}

export default TaskList;
