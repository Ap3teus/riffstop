import * as pg from 'pg-promise';
import * as secrets from './secrets.json';

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } = process.env;

const pgp = pg();
export const db = pgp(
  POSTGRES_USER
    ? {
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        database: POSTGRES_DB,
        host: 'localhost',
      }
    : process.env.PROD_DB ?? '',
);

console.log(db.$cn);
