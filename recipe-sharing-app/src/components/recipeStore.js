import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [
    {
      id: "1",
      title: "Spaghetti Bolognese",
      description: "A classic Italian pasta dish with rich meat sauce.",
    },
    {
      id: "2",
      title: "Chicken Curry",
      description:
        "A spicy and flavorful chicken curry made with coconut milk.",
    },
  ],
  searchTerm: "", // State to hold the search term
  filteredRecipes: [], // Array to store filtered recipes

  // Action to set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Action to filter recipes based on the search term
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  setRecipes: (newRecipes) => set({ recipes: newRecipes }), // Add this method
}));

export default useRecipeStore;
