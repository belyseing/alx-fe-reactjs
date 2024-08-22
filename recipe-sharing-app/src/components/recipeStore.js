import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "Spaghetti", description: "Delicious spaghetti recipe" },
    { id: 2, title: "Pancakes", description: "Fluffy pancakes with syrup" },
  ],

  // Action to add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Action to delete a recipe
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),

  // Action to update a recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  setRecipes: (newRecipes) => set({ recipes: newRecipes }), // Add this method
}));

export default useRecipeStore;
