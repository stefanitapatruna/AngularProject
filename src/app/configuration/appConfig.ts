export abstract class AppConfig {
  pokemonBaseApi: string;
  pokemonEvolution: string;
  pokemonSpecies: string;
  pokemonDamage: string;
  pokemonDetailsBaseApi: string;

  constructor() {
    this.pokemonBaseApi = '';
    this.pokemonEvolution = '';
    this.pokemonSpecies = '';
    this.pokemonDamage = '';
    this.pokemonDetailsBaseApi = '';
  }
}
