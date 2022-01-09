import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../../services/pokemon/pokemon.service";
import { PokemonsBook } from "../../interfaces/pokemonsBook";
import { ConfigAppService } from "../../services/config/config-app.service";
import { Router } from "@angular/router";
import { SelectedPokemonService } from "../../services/selectedPokemon/selected-pokemon.service";
import { DomSanitizer } from "@angular/platform-browser";
import { PokemonData } from "../../interfaces/pokemonData";
import { mergeMap } from "rxjs/operators";
import { UserService } from "../../services/user/user.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemonUrl: string = '';
  pokemonDetail= {} as PokemonData;
  pokemonIndexStart: number = 0;
  pokemonIndexEnd: number = 30;

  pokemons = { } as PokemonsBook;

  constructor(private _pokemonService: PokemonService,
              private configuration: ConfigAppService,
              private router: Router,
              private selectedPokemon: SelectedPokemonService,
              private sanitizer: DomSanitizer,
              private _user:UserService ) {

    this.pokemonUrl = configuration.pokemonBaseApi + '?limit=30&offset=0';
  }

  ngOnInit(): void {
    this.getPokemons(this.pokemonUrl);
  }

  getPokemons(url:string): void {
    this._pokemonService.getPokemons(url)
      .subscribe(data => {
        this.pokemons= data;
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

  // getPokemonImage(name:string) {
  //   return '../../../assets/images/fallbackImage.jfif';
  // }

  getPokemonImage(name:string) {

    this._pokemonService.getPokemonDetail(name).pipe(
      mergeMap((responseDetail:PokemonData) => this._pokemonService.getImage(responseDetail.sprites.front_default))
    ).subscribe( image => {
      return this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(image));
    })
  }
}
