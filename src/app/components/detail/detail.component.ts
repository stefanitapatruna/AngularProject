import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PokemonService } from "../../services/pokemon/pokemon.service";
import { PokemonData } from "../../interfaces/pokemonData";
import { SelectedPokemonService } from "../../services/selectedPokemon/selected-pokemon.service";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  name: string = '';
  selectedPokemon: string = '';
  pokemonDetail = { } as PokemonData;

  constructor(private _pokemonService: PokemonService,
              private _selectedPokemon: SelectedPokemonService,
              private changeDetector: ChangeDetectorRef) {

    this.pokemonDetail = {
      id: 0,
      name : '',
      height : 0,
      weight : 0,
      abilities: [
        {
          ability : {
            name: ''
          }
        }
      ],
      sprites : {
        front_default : '',
        back_default: ''
      },
      types: [''],
      stats: [
        {
          name: '',
          value: 0
        }
      ],
      evolves_to: {
        name: '',
        condition: ''
      }
    }
  }

  ngOnInit(): void {
    this._selectedPokemon.getSelectedPokemon().subscribe( data => {
        this.getPokemonDetail(data);
      }
    )
  }

  getPokemonDetail(name:string): void {
    this._pokemonService.getPokemonDetail(name).subscribe( data => {
        this.pokemonDetail = data;
        console.log(this.pokemonDetail);
        this.changeDetector.markForCheck();
    })
  }
}
