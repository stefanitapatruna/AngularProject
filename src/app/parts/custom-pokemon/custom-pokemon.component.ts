import {Component, OnInit, Input} from '@angular/core';
import {CustomPokemon} from "../../interfaces/CustomPokemon";
import {PokemonService} from "../../services/pokemon/pokemon.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-custom-pokemon',
  templateUrl: './custom-pokemon.component.html',
  styleUrls: ['./custom-pokemon.component.scss']
})
export class CustomPokemonComponent implements OnInit {

  @Input() customPokemon = {} as CustomPokemon;

  customPokemonImage: any = undefined;

  constructor(private _pokemonService: PokemonService,
              private _sanitizer: DomSanitizer) {
    this.customPokemon = {
      name: '',
      description: '',
      price: 0,
      categories: '',
      imageUrl: '',
      phone: '',
      country: ''
    }
  }


  ngOnInit(): void {
    this.getImage(this.customPokemon.imageUrl);
  }

  getImage(url: string) {
    this._pokemonService.getImage(url).subscribe(data =>
      this.customPokemonImage = this._sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data)))
  }
}
