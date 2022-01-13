import {Component, NgZone, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon/pokemon.service";
import {PokemonData} from "../../interfaces/pokemonData";
import {SelectedPokemonService} from "../../services/selectedPokemon/selected-pokemon.service";
import {DomSanitizer} from "@angular/platform-browser";
import {forkJoin, of} from "rxjs";
import {map, switchMap} from "rxjs/operators";
import {Evolution} from "../../interfaces/evolution";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {

  pokemonDetail = {} as PokemonData;
  evolutionChain = {} as Evolution;
  pokemonImage: any;
  evolveToImage: any;
  loading: boolean = true;

  constructor(private _pokemonService: PokemonService,
              private _selectedPokemon: SelectedPokemonService,
              private ngZone: NgZone,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this._selectedPokemon.getSelectedPokemon().subscribe(name => {
      this.getPokemonDetail(name);
    })
  }

  getPokemonDetail(name: string) {
    this._pokemonService.getPokemonDetail(name).subscribe(data => {
      this.pokemonDetail = data;
      this.pokemonDetail.weight *= 0.1;
      this.pokemonDetail.height = (this.pokemonDetail.height * 0.1).toFixed(2);
      this.getPokemonImage(this.pokemonDetail.sprites.front_default);
      this.getPokemonCompleteDetails(this.pokemonDetail.id);
    })
  }

  getPokemonCompleteDetails(id: number) {
    let evolution = <object>{};
    let species = <object>{};
    let moves = <object>{};

    this.getSpeciesDetail(id);
  }

  getSpeciesDetail(id: number) {
    this._pokemonService.getPokemonSpecies(id).subscribe(data => {
        this.pokemonDetail.species = data;
        this.getEvolutionChain(this.pokemonDetail.species.evolution_chain.url);
      }
    );
  }

  getEvolutionChain(url: string) {
    this._pokemonService.getPokemonEvolution(url).subscribe(data => {
        this.evolutionChain = data;
        this.getEvolutionDetails(this.pokemonDetail.name, data.chain);
      }
    );
  }

  getEvolutionDetails(name: string, evolution: any) {
    let details: any;
    let couldEvolve: boolean = false;
    if (name === evolution.species.name) {
      couldEvolve = true;
      details = evolution.evolves_to[0];
    } else if (name === evolution.evolves_to[0].species.name) {
      couldEvolve = true;
      details = evolution.evolves_to[0].evolves_to[0];
    }
    this.pokemonDetail.could_evolve = couldEvolve;
    this.pokemonDetail.evolves_to = details.species.name;
    this.pokemonDetail.evolves_to_condition = details.evolution_details[0].min_level;

    this._pokemonService.getPokemonDetail(this.pokemonDetail.evolves_to).pipe(
      switchMap(response => this._pokemonService.getImage(response.sprites.front_default))
    ).subscribe(
      result => this.evolveToImage = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(result)));

  }

  getPokemonImage(url: string) {
    this._pokemonService.getImage(url).subscribe(data =>
      this.pokemonImage = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data)))
  }
}
