import express from 'express';
import GenerationEngine from 'app/generation/engine';

const app = express();
const engine = new GenerationEngine();

engine.start();

app.get('/', (req, res) => {
  res.json({
    dragon: engine.generation.newDragon()
  });
});

module.exports = app;
