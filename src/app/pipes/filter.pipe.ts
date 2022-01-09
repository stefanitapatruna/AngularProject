import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'pokemonFilter' })

export class FilterPipe implements PipeTransform{

  transform(items:[{'name':string}], searchPokemon: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchPokemon) {
      return items;
    }

    return items.filter( (pokemon) => {
      return pokemon.name.includes(searchPokemon);
    });
  }
}
