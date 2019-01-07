import pool from 'databasePool';
import TRAITS from 'data/traits.json';

TRAITS.forEach((TRAIT) => {
  const traitType = TRAIT.type;
  const traitValues = TRAIT.values;

  console.log('ME');

  console.log('traitType', traitType);
  console.log('traitValues', traitValues);

  console.log('/ME');

  traitValues.forEach((traitValue) => {
    pool.query(
      `INSERT INTO trait("traitType", "traitValue") 
      VALUES($1, $2)
      RETURNING id`,
      [traitType, traitValue],
      (error, response) => {
        if (error) console.error(error);

        console.log('response');
        console.log(response);

        const traitId = response.rows[0].id;
        console.log(`Inserted trait - id: ${traitId}`);
      }
    );
  });
});
