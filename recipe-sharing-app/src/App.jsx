import React from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./EditRecipeForm";
import { Routes, Route } from "react-router-dom";
// Import other components as needed

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="recipes" element={<RecipeList />} />
      <Route path="recipes/:recipeId" element={<RecipeDetails />} />
      <Route path="add-recipe" element={<AddRecipeForm />} />
      <Route path="edit-recipe/:recipeId" element={<EditRecipeForm />} />
    </Routes>
  );
};

export default App;
