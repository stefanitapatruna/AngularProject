export interface PokemonSpecies {
  egg_groups: [{
    name: string
  }],
  color: {
    name: string
  },
  evolution_chain: {
    url: string
  },
  flavor_text_entries: [{
    flavor_text: string
  }],
  capture_rate: number
}

export interface PokemonData {
  id: number,
  name: string,
  height: any,
  weight: number,
  abilities: [{
    ability: {
      name: string;
    }
  }],
  sprites: {
    front_default: string,
    back_default: string
  },
  types: [ {
    type: {
      name : string,
      url : string
    }
  } ],
  stats: [{
    base_stat: number,
    stat:
      {
        name: string,
        value: number
      }
  }],
  could_evolve: boolean,
  evolves_to: {
    name: string,
    condition: string
  },
  species: PokemonSpecies,
  moves: {}
}
