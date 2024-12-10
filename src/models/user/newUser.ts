import { z } from 'zod';

const newUserSchema = z.object({
  username: z.string(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string(),
  passwordHash: z.string()
});

export default newUserSchema;