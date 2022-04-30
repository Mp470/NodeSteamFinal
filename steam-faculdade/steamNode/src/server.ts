import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import { router } from './routes';
import { ErrorHandler } from './utils/error/ErrorHandler';
import cors from 'cors';

const app = express();
const SERVER_PORT = 3333;

app.use(express.json());

app.use(cors());

app.use(router);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof ErrorHandler) {
      response.status(error.statusCode).json({
        statusCode: 'error',
        message: error.message,
      });
    }
    next();
  }
);
app.listen(SERVER_PORT, () =>
  console.log(`Server is Running 😎 PORT:${SERVER_PORT}`)
);
