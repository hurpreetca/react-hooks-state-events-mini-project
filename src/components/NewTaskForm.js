import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTextInput, setNewTextInput] = useState("");
  const [currentCategory, setCurrentCategory] = useState("Code");

  const filteredCategory = categories.slice(1);
  const displayCategory = filteredCategory.map((category) => {
    return (
      <option key={category} value={category}>
        {category}
      </option>
    );
  });
  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      text: newTextInput,
      category: currentCategory,
    };
    onTaskFormSubmit(newTask);
    setNewTextInput("");
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={newTextInput}
          onChange={(e) => setNewTextInput(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={currentCategory}
          onChange={(e) => setCurrentCategory(e.target.value)}
        >
          {displayCategory}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
