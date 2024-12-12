import Recipe, {NewRecipe} from "../models/recipe/recipe";

const getAllRecipes = async () => {
  const result = await Recipe.find({});

  if (result) return result;
}

const addRecipe = async (recipeObject: NewRecipe) => {
  console.log(recipeObject);
  
  return 'creating recipt';
}

export default {
  getAllRecipes,
  addRecipe
}