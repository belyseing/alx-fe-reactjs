import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Initial state: an empty array of recipes

  // Action to add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // Action to set the initial list of recipes
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
