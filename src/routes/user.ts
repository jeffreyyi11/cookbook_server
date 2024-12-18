import express, { Request, Response } from 'express';
import userService from '../services/userService';
import newUserSchema from '../models/user/newUserSchema';

const router = express.Router();

router.get('/', async (_req: Request, res: Response) => {
  const result = await userService.getAllUsers();
  res.status(200).send(result);
})

router.post('/', async (req: Request, res: Response) => {
  const newUser = newUserSchema.parse(req.body);
  const createduser = await userService.addUser(newUser);
  
  res.status(201).send(createduser);
})

router.put('/:id', async (req: Request, res: Response) => {
  const updatedUser = await userService.updateUser(req.params.id, req.body);
  res.status(201).send(updatedUser);
})

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await userService.deleteUser(req.params.id);

    res.sendStatus(204);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error('Error deleting user');
    }
  }
})

export default router;