-- Deploy preact-template:users to pg

BEGIN;

CREATE TABLE account (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name TEXT,
  email TEXT,
  password_hash TEXT,
  PRIMARY KEY (id)
);

COMMIT;
