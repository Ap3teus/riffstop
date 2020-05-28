#!/bin/bash

cd $(dirname $0)
ENV=$1
if [ "$ENV" != "prod" -a "$ENV" != "dev" ]
then
  echo "Invalid environment $ENV"
  set -e
  false
fi

DB="db:pg:$POSTGRES_DB"

if [ "$ENV" = "prod" ]
then
  DB=$PROD_DB
  read -p "Are you sure? [y/N]: "  -r
  if [[ $REPLY =~ ^[Yy]$ ]]
  then
    sqitch "${@:2}" $DB
  else
    echo "Aborting"
  fi
else
  sqitch "${@:2}" $DB
fi
