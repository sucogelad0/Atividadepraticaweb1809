import 'dotenv/config';

const port = Number(process.env.PORT ?? 3001);
if (!Number.isInteger(port) || port < 1 || port > 65535)
  throw new Error('PORT inválida.');
if (!process.env.DATABASE_URL)
  throw new Error('DATABASE_URL não configurada.');
export const env = { port };
