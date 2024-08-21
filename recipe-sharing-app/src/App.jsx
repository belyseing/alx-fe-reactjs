import React from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Import other components as needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecipeList />} />{" "}
        {/* Route for the homepage */}
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />{" "}
        {/* Route for recipe details */}
        <Route path="/add-recipe" element={<AddRecipeForm />} />{" "}
        {/* Route for adding a new recipe */}
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
