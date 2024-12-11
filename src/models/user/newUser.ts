import { z } from 'zod';

const newUserSchema = z.object({
  username: z.string(),
  firstName: z.string(),
  lastName: z.string().optional(),
  email: z.string(),
  password: z.string()
});

export default newUserSchema;