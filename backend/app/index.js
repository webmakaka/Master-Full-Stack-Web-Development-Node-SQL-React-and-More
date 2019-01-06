import express from 'express';
import GenerationEngine from 'app/generation/engine';
import dragonRouter from 'app/api/dragon';
import generationRouter from 'app/api/generation';

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

engine.start();

module.exports = app;
