import express, { Response, Request } from 'express';
import * as dotenv from 'dotenv';
import userRouter from './routes/user';
import recipeRouter from './routes/recipe';
import cors from 'cors';
import connectToDb from './lib/mongodb';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI!;

connectToDb(MONGODB_URI);

app.use(cors());
app.use(express.json());

app.get('/ping', (_req: Request, res: Response) => {
  res.send('pong');
});

app.use('/api/users', userRouter);
app.use('/api/recipes', recipeRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});