#!/bin/bash

export PGPASSWORD='node_password'

echo "Configuring dragonstackdb"

dropdb -U node_user dragonstackdb
create -U node_user dragonstackdb

psql -U node_user dragonstackdb < ./bin/sql/generation.sql
psql -U node_user dragonstackdb < ./bin/sql/dragon.sql
psql -U node_user dragonstackdb < ./bin/sql/tait.sql

node ./bin/insertTraits.js

echo "dragonstackdb configured"