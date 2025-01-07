import { NextFunction, Request, Response } from 'express';
import jwt, {JwtPayload} from 'jsonwebtoken';

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const auth = async (req: Request, _res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new Error('No Token Found');
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET!);
    
    (req as CustomRequest).token = decodedToken;

    next();
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error('Failed to authenticate');
    }
  }
}