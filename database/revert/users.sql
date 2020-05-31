-- Revert preact-template:users from pg

BEGIN;

DROP TABLE account;

COMMIT;
