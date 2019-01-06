import pool from 'databasePool';

class GenerationTable {
  static storeGeneration (generation) {
    pool.query(
      'INSERT INTO generation(expiration) VALUES($1)',
      [generation.expiration],
      (error, response) => {
        if (error) return console.error(error);
      }
    );
  }
}

module.exports = GenerationTable;
