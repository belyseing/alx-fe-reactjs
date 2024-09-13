import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.json"; // Import the data

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from the URL
  const [recipe, setRecipe] = useState(null); // To store the selected recipe

  useEffect(() => {
    // Find the recipe with the matching ID
    const selectedRecipe = data.recipes.find(
      (recipe) => recipe.id === parseInt(id)
    );

    if (selectedRecipe) {
      setRecipe(selectedRecipe); // Set the found recipe to the state
    } else {
      console.error("Recipe not found");
    }
  }, [id]); // Runs every time the `id` changes

  if (!recipe) {
    return <div>Loading...</div>; // Display loading until the recipe is found
  }

  return (
    <div className="recipe-detail">
      <h1 className="text-4xl font-bold">{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} className="my-6 rounded-lg" />

      <h2 className="text-2xl font-semibold">Ingredients</h2>
      <ul className="list-disc pl-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Instructions</h2>
      <ol className="list-decimal pl-6">
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
