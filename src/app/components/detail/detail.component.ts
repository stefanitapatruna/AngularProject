import {Component, NgZone, OnInit} from '@angular/core';
import {PokemonService} from "../../services/pokemon/pokemon.service";
import {PokemonData} from "../../interfaces/pokemonData";
import {SelectedPokemonService} from "../../services/selectedPokemon/selected-pokemon.service";
import {DomSanitizer} from "@angular/platform-browser";
import {forkJoin, of} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {

  pokemonImage: any;
  pokemonDetail = {} as PokemonData;
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
        this.getEvolutionDetail(this.pokemonDetail.species.evolution_chain.url);
      }
    );
  }

  getEvolutionDetail(url: string) {
    this._pokemonService.getPokemonEvolution(url).subscribe(data => {
      }
    );
  }

  getPokemonImage(url: string) {
    this._pokemonService.getImage(url).subscribe(data =>
      this.pokemonImage = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data)))
  }
}
