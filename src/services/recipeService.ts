import Recipe from "../models/recipe/recipe";

const getAllRecipes = async () => {
  const result = await Recipe.find({});

  if (result) return result;
}

export default {
  getAllRecipes
}