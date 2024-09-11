import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // Extract recipe ID from the URL
  const [recipe, setRecipe] = useState(null); // State to store recipe data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Fetch the data from the public folder
    fetch("/recipes.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch recipes");
        }
        return response.json(); // Parse the JSON response
      })
      .then((data) => {
        // Find the recipe by ID
        const selectedRecipe = data.find(
          (recipe) => recipe.id === parseInt(id, 10)
        );
        if (selectedRecipe) {
          setRecipe(selectedRecipe); // Set the recipe state
        } else {
          setError("Recipe not found");
        }
        setLoading(false); // Stop loading
      })
      .catch((err) => {
        setError(err.message); // Set error state
        setLoading(false); // Stop loading
      });
  }, [id]); // Run the effect whenever the ID changes

  // Handle loading state
  if (loading) {
    return <p>Loading recipe...</p>;
  }

  // Handle error state
  if (error) {
    return <p>{error}</p>;
  }

  // If the recipe is not found
  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <img
        src={recipe.imageUrl}
        alt={recipe.name}
        className="w-full h-auto mb-4"
      />

      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc pl-6">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-semibold mt-4 mb-2">Instructions</h2>
      <ol className="list-decimal pl-6">
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
