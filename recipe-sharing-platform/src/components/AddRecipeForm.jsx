import React, { useState } from "react";

const AddRecipeForm = () => {
  // Form state
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // Error state
  const [errors, setErrors] = useState("");

  // Validation logic
  const validate = () => {
    if (!title || !ingredients || !steps) {
      setErrors("All fields are required.");
      return false;
    }

    const ingredientList = ingredients.split(",");
    if (ingredientList.length < 2) {
      setErrors("Please list at least two ingredients.");
      return false;
    }

    setErrors(""); // Clear errors if validation passes
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields before submitting
    if (!validate()) {
      return;
    }

    // Process the form submission (e.g., send data to an API or store it in state)
    console.log({
      title,
      ingredients,
      steps,
    });

    // Reset form fields after submission
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      {errors && <p className="text-red-500 mb-4">{errors}</p>}

      <form
        onSubmit={handleSubmit}
        className="space-y-4 shadow-md bg-white rounded-lg p-6"
      >
        {/* Recipe Title */}
        <div>
          <label className="block text-lg font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-lg font-semibold mb-2">
            Ingredients (comma-separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-lg font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
