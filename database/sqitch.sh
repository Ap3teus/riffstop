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
fi

sqitch "${@:2}" $POSTGRES_DB