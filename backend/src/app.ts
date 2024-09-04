import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import apiRoutes from 'routes/apiRoutes';
import { BadRequestError, NotFoundError } from './expressError';


const app = express();
app.use(express.json());
app.use(cors());
app.use('/apiRoutes', apiRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  throw new NotFoundError();
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack);

  if (err instanceof NotFoundError || err instanceof BadRequestError) {
    const status = err.status || 500;
    const { message } = err;
    res.status(status).json({
      error: { message, status },
    });
  } else {
    const status = 500;
    const message = 'Internal Server Error';
    res.status(status).json({
      error: { message, status },
    });
  }
});

export default app;
