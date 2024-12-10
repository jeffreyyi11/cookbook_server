import express, { Request, Response } from 'express';
import recipeService from '../services/recipeService';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  const result = recipeService.getAllRecipes();

  res.status(200).send(result);
})

router.post('/', (_req: Request, res: Response) => {
  res.send('adding recipe');
})

export default router;