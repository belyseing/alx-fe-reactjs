import React, { useState } from "react";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [ingredients, setIngredients] = useState(recipe.ingredients.join(", "));
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const updatedRecipe = {
      ...recipe,
      title,
      description,
      ingredients: ingredients.split(",").map((ing) => ing.trim()),
    };

    updateRecipe(updatedRecipe);
    // Optionally, provide feedback or redirect after updating
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Ingredients (comma-separated):</label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
