import express, { Request, Response } from 'express';
import loginService from '../services/loginService';
import loginSchema from '../models/login/newLoginSchema';
import { z } from 'zod';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const loginObject = loginSchema.parse(req.body);
  
  try {
    const loginResponse = await loginService.loginUser(loginObject);

    res.status(200).send(loginResponse);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({error: error.message});
    } else if (error instanceof z.ZodError) {
      console.log('ZodError: ', error.issues)
      res.status(400).send({error: error.issues});
    }
  }
})

export default router;