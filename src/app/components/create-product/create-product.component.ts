import { Component, OnInit } from '@angular/core';
import { FormControl,FormsModule, ReactiveFormsModule } from "@angular/forms";
import {PokemonService} from "../../services/pokemon/pokemon.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  category : string = '';
  categories : { results: [{name: string}]} = {results : [{name:''}]};
  constructor( private _pokemonService: PokemonService) {
    this.getCategories();
  }

  getCategories() {
    this._pokemonService.getPokemonCategories().subscribe( data => {
      this.categories = data;
    })
  }

  ngOnInit(): void {
  }

}
