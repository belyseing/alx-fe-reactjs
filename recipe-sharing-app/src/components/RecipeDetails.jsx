import { useParams, Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId, 10))
  );

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <Link to={`/edit-recipe/${recipe.id}`}>Edit Recipe</Link>
      <Link to="/recipes">Back to Recipe List</Link>
    </div>
  );
};

export default RecipeDetails;
