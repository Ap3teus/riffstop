-- Revert preact-template:songs from pg

BEGIN;

DROP TABLE song;

COMMIT;
