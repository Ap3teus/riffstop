-- Deploy preact-template:songs to pg

BEGIN;

CREATE TABLE song (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  account_id UUID REFERENCES account(id),
  artist TEXT,
  name TEXT,
  PRIMARY KEY (id)
);

COMMIT;
