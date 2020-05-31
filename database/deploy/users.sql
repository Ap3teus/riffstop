-- Deploy preact-template:users to pg

BEGIN;

CREATE TABLE account (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  PRIMARY KEY (id)
);

COMMIT;
