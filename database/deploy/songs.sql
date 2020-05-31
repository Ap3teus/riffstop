-- Deploy preact-template:songs to pg

BEGIN;

CREATE TABLE song (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  account_id UUID NOT NULL REFERENCES account(id),
  artist TEXT,
  name TEXT NOT NULL,
  PRIMARY KEY (id)
);

COMMIT;
