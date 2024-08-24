import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (recipes.length === 0) {
    return <p>No recipes found. Add a new recipe!</p>;
  }

  return (
    <div className="recipe-list">
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} className="recipe-item">
          <h2>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h2>
          {/* Display additional recipe details here */}
        </div>
      ))}
    </div>
  );
};
export default RecipeList;
