import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });
function App() {
  const [newTasks, setNewTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function onTaskFormSubmit(newTask) {
    setNewTasks([...newTasks, newTask]);
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        key={CategoryFilter.key}
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasks={newTasks}
        setNewTasks={setNewTasks}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default App;
