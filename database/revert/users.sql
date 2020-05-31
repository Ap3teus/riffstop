-- Revert preact-template:users from pg

BEGIN;

DROP TABLE user;

COMMIT;
