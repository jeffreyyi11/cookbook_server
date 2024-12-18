import { z } from 'zod';
import newUserSchema from '../user/newUserSchema';

const newRecipeSchema = z.object({
  name: z.string(),
  ingredients: z.array(z.object({
    name: z.string()
  })).optional(),
  prepTime: z.string(),
  cookTime: z.string(),
  createdBy: newUserSchema
})

export default newRecipeSchema;