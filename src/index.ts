import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectToDb from './lib/mongodb';
import userRouter from './routes/user';
import recipeRouter from './routes/recipe';
import loginRouter from './routes/login';
import { auth } from './utils/authenticate';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI!;

connectToDb(MONGODB_URI);

app.use(cors());
app.use(express.json());

// server ping test
// app.get('/ping', (_req: Request, res: Response) => {
//   res.send('pong');
// });

app.use('/api/users', userRouter);
app.use('/api/login', loginRouter);
app.use('/api/recipes', auth, recipeRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});