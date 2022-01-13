import {Component, OnInit} from '@angular/core';
import {CustomPokemon} from "../../interfaces/CustomPokemon";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  pokemon = {} as CustomPokemon;
  customPokemonArray: any;

  constructor() {
    this.initializePokemonArray();
  }

  ngOnInit(): void {
    if (this.customPokemonExist()) {
      this.createPokemonArray();
    }
  }

  customPokemonExist() {
    return localStorage.length > 0;
  }

  createPokemonArray() {
    let i = 0;
    Object.values(localStorage).forEach((value) => {
      this.customPokemonArray[i] = JSON.parse(value);
      i++;
    });
  }

  deleteStorageData() {
    localStorage.clear();
    this.initializePokemonArray();
  }

  initializePokemonArray() {
    this.customPokemonArray = [{
      name: '',
      description: '',
      price: '',
      categories: '',
      imageUrl: '',
      phone: '',
      country: ''
    }]
  }

}
