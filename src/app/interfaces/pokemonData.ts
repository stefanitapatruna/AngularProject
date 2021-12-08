interface PokemonAbilities {
    ability: {
      name: string;
    }
}

export interface PokemonData {
  id: number,
  name: string,
  height: any,
  weight: number,
  abilities: PokemonAbilities[],
  sprites: {
    front_default: string,
    back_default: string
  },
  types: [ string ],
  stats: [
    {
      name: string,
      value: number
    }
  ],
  evolves_to: {
    name: string,
    condition: string
  }
}
