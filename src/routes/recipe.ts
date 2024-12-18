import express, { Request, Response } from 'express';
import recipeService from '../services/recipeService';
import newRecipeSchema from '../models/recipe/newRecipe';

const router = express.Router();

router.get('/', async (_req: Request, res: Response) => {
  const result = await recipeService.getAllRecipes();

  res.status(200).send(result);
})

router.post('/', async (req: Request, res: Response) => {
  const newRecipe = newRecipeSchema.parse(req.body);
  console.log(newRecipe);
  // const result = await recipeService.addRecipe(newRecipe);

  res.send('adding recipe');
})

export default router;