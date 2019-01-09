import express from 'express';
import cors from 'cors';
import GenerationEngine from 'app/generation/engine';
import dragonRouter from 'app/api/dragon';
import generationRouter from 'app/api/generation';

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use(cors({ origin: 'http://localhost:8080' }));

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    type: 'error',
    message: err.message
  });
});

engine.start();

module.exports = app;
