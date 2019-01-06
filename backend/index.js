import express from 'express';
import GenerationEngine from 'engine';

const app = express();
const engine = new GenerationEngine();
const port = 3000;

engine.start();

app.get('/', (req, res) => {
  res.json({
    dragon: engine.generation.newDragon()
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));