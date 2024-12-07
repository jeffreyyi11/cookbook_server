import express, { Response, Request } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get('/ping', (_req: Request, res: Response) => {
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});