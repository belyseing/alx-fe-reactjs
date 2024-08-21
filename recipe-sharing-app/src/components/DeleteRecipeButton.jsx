import React from "react";
import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate(); // Use useNavigate to handle navigation

  const handleDelete = () => {
    deleteRecipe(recipeId); // Delete the recipe
    navigate("/"); // Redirect to the homepage or any other page after deletion
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
