import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';


const App = () => {
  return (
    <div>
      <h1>Recipe Manager</h1>
      {/* Display the list of recipes */}
      <RecipeList />
      {/* Form to add new recipes */}
      <AddRecipeForm />
    </div>
  );
};

export default App;