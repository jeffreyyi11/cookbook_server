import express, { Request, Response, NextFunction } from 'express';
import loginService from '../services/loginService';
import loginSchema from '../models/login/newLoginSchema';
import { z } from 'zod';

const router = express.Router();

const errorMiddleware = (error: unknown, _req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Error) {
    res.status(400).json({error: error.message});
  } else if (error instanceof z.ZodError) {
    res.status(400).send({error: error.issues});
  } else {
    next(error);
  }
};

router.post('/', async (req: Request, res: Response) => {
  const loginObject = loginSchema.parse(req.body);
  console.log(loginObject);
  const loginResponse = await loginService.loginUser(loginObject);
  console.log(loginResponse);
  res.status(200).send(loginResponse);
})

router.use(errorMiddleware);

export default router;