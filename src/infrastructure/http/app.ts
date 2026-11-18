import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { routes } from '../../application/routes/index.js';
import { errorHandler } from '../../shared/middlewares/errors.js';

export const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.use('/api', routes);

app.use((_req, res) => {
  res.status(404).json({
    error: 'ROUTE_NOT_FOUND',
    message: 'Rota não encontrada.'
  });
});

app.use(errorHandler);
