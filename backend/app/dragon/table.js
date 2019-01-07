import pool from 'databasePool';

class DragonTable {
  static storeDragon (dragon) {
    const { birthdate, nickname, generationId } = dragon;


    console.log('ME')

    console.log('dragon', dragon)

    console.log('/ME')

    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO dragon(birthdate, nickname, "generationId") 
         VALUES($1, $2, $3) RETURNING id`,
        [birthdate, nickname, generationId],
        (error, response) => {
          if (error) return reject(error);

          const dragonId = response.rows[0].id;

          resolve({ dragonId });
        }
      );
    });
  }
}

module.exports = DragonTable;
