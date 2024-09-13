import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null); // State to store the fetched recipe data
  const [error, setError] = useState(null); // State to store any errors

  useEffect(() => {
    // Fetch the recipe data from the JSON file
    fetch("/data/recipes.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch the recipe data");
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
          setError("Recipe not found");
        }
      })
      .catch((err) => {
        setError("Error fetching recipe data");
        console.error(err);
      });
  }, [id]); // Re-run when the recipe ID changes

  // Show error message if there's an issue
  if (error) {
    return <div>{error}</div>;
  }

  // Show loading indicator while the data is being fetched
  if (!recipe) {
    return <div>Loading...</div>;
  }

  // Render the recipe details
  return (
    <div className="recipe-detail">
      <h1 className="text-4xl font-bold">{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="mb-6 rounded-lg w-full sm:w-1/2 lg:w-1/3"
      />

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
