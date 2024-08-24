import React from "react";
import RecipeList from "./components/RecipeList";
import SearchBar from "./components/SearchBar.jsx";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Import other components as needed

const App = () => {
  return (
    <div className="app">
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <RecipeList />
    </div>
  );
};

export default App;
