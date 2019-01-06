import { Pool } from 'pg';
import databaseConfiguration from 'secrets/databaseConfiguration';

const pool = new Pool(databaseConfiguration);

module.exports = pool;