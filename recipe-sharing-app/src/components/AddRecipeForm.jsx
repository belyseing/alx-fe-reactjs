import { useState } from "react";
import useRecipeStore from "./recipeStore";

const AddRecipeForm = () => {
  // Local state to manage form inputs

  const [recipeName, setRecipeName] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState("");

  // Get the addRecipe action from the Zustand store
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  // Function to handle form submission
  const handleAddRecipe = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Create a new recipe object
    const newRecipe = {
      id: Date.now(), // Use current timestamp as a simple unique ID
      name: recipeName,
      ingredients: recipeIngredients
        .split(",")
        .map((ingredient) => ingredient.trim()), // Split ingredients into an array
    };

    // Call the addRecipe action to add the new recipe to the store
    addRecipe(newRecipe);

    // Clear the form inputs
    setRecipeName("");
    setRecipeIngredients("");
  };

  return (
    <form onSubmit={handleAddRecipe}>
      <div>
        <label>
          Recipe Name:
          <input
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Ingredients (comma separated):
          <input
            type="text"
            value={recipeIngredients}
            onChange={(e) => setRecipeIngredients(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
