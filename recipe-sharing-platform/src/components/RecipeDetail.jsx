import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from the URL
  const [recipe, setRecipe] = useState(null); // To store the fetched recipe data

  useEffect(() => {
    // Fetch the recipe data from the JSON file
    fetch("/data/recipes.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Find the recipe with the matching ID
        const selectedRecipe = data.find(
          (recipe) => recipe.id === parseInt(id)
        );
        if (selectedRecipe) {
          setRecipe(selectedRecipe);
        } else {
          console.error("Recipe not found");
        }
      })
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]); // This runs every time the `id` changes

  if (!recipe) {
    return <div>Loading...</div>; // Show loading while fetching the recipe data
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
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
