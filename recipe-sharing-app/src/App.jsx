import React from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
// Import other components as needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
