import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from "../../services/pokemon/pokemon.service";
import { PokemonData } from "../../interfaces/pokemonData";
import {switchMap} from "rxjs/operators";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {


  @Input() pokemonName: string ='';

  private pokemonDetail = { } as PokemonData;
  pokemonImage : any;

  constructor(private _pokemonService: PokemonService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getImage(this.pokemonName);
  }

  getImage(name:string) {

    this._pokemonService.getPokemonDetail(name).pipe(
      switchMap(response => this._pokemonService.getImage(response.sprites.front_default))
    ).subscribe(
      result => this.pokemonImage = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(result)));
  }

}
