import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../../services/pokemon/pokemon.service";
import { PokemonsBook } from "../../interfaces/pokemonsBook";
import { ConfigAppService } from "../../services/config/config-app.service";
import { Router } from "@angular/router";
import {SelectedPokemonService} from "../../services/selectedPokemon/selected-pokemon.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemonUrl: string = '';
  pokemonIndexStart: number = 0;
  pokemonIndexEnd: number = 30;

  pokemons = { } as PokemonsBook;

  constructor(private _pokemonService: PokemonService, private configuration: ConfigAppService, private router: Router,
              private selectedPokemon: SelectedPokemonService ) {
    this.pokemonUrl = configuration.pokemonBaseApi + '?limit=30&offset=0';
  }

  ngOnInit(): void {
    this.getPokemons(this.pokemonUrl);
  }

  getPokemons(url:string): void {
    this._pokemonService.getPokemons(url)
      .subscribe(data => {
        this.pokemons.count = data.count;
        this.pokemons.next = data.next;
        this.pokemons.previous = data.previous;
        this.pokemons.results = data.results;
        console.log(this.pokemons.results);
      })
  }

  goToPokemonDetail(name: any) {
    this.selectedPokemon.setSelectedPokemon(name);
    this.router.navigateByUrl('detail');
  }

  getPokemonsNextPage(url:string): void {
    this.getPokemons(url);
    this.pokemonIndexStart += 30;
    this.pokemonIndexEnd += 30;
  }

  getPokemonsPreviousPage(url:string): void {
    this.getPokemons(url);
    this.pokemonIndexStart -= 30;
    this.pokemonIndexEnd -= 30;
  }

  getPokemonData(url:string) {
    return this.pokemonUrl;
  }
}
