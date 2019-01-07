import Generation from 'app/generation';
import GenerationTable from 'app/generation/table';

class GenerationEngine {
  constructor () {
    this.generation = null;
    this.timer = null;
  }

  start () {
    this.buildNewGeneration();
  }

  stop () {
    clearTimeout(this.timer);
  }

  buildNewGeneration () {
    const generation = new Generation();

    GenerationTable.storeGeneration(generation)
      .then(({ generationId }) => {
        this.generation = generation;
        this.generation.generationId = generationId;

        console.log('new generation', this.generation);

        this.timer = setTimeout(
          () => this.buildNewGeneration(),
          this.generation.expiration.getTime() - Date.now()
        );
      })
      .catch((error) => console.log(error));
  }
}

module.exports = GenerationEngine;
