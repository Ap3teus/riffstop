import * as pg from 'pg-promise';

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, PROD_DB } = process.env;

const pgp = pg();
export const db = pgp(`postgresql://${PROD_DB}` ?? '');
