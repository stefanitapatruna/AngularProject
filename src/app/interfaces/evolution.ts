export interface Evolution {
  chain: {
    evolution_details: [{
      min_level: number
    }],
    species: {
      name: '',
      url: ''
    },
    evolves_to: [{
      evolution_details: [{
        min_level: number
      }],
      species: {
        name: '',
        url: ''
      },
      evolves_to: [{
        evolution_details: [{
          min_level: number
        }],
        species: {
          name: '',
          url: ''
        }
      }]
    }]
  }
}
