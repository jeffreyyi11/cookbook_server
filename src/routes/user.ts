import express, { Request, Response } from 'express';
import userService from '../services/userService';
import newUserSchema from '../models/user/newUser';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
  const result = userService.getAllUsers();
  console.log(result);
  res.status(200).send(result);
})

router.post('/', (req: Request, res: Response) => {
  console.log(req.body);
  const newUser = newUserSchema.parse(req.body);

  res.send('adding user');
})

export default router;