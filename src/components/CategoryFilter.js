import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  function handleClick(category) {
    setSelectedCategory(category);
  }
  const categoriesButton = categories.map((category) => {
    const className = selectedCategory === category ? "selected" : null;
    return (
      <button
        key={category}
        className={className}
        onClick={() => handleClick(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoriesButton}
    </div>
  );
}

export default CategoryFilter;
