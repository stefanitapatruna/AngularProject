import {Component, OnInit} from '@angular/core';
import {SelectedPokemonService} from "../../services/selectedPokemon/selected-pokemon.service";
import {PokemonService} from "../../services/pokemon/pokemon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html',
  styleUrls: ['./navigation-links.component.scss']
})

export class NavigationLinksComponent implements OnInit {

  translate: { [key: string]: string } = {
    pokemon: 'Pokemon',
    home: 'Home',
    detail: 'Detail',
    createProduct: 'Create Product',
    productList: 'Product List'
  }

  isAdmin: boolean = true;
  menuTitle = 'Pokemon';
  searchPokemon: string = '';

  menuRoutesForAdmin = ['home', 'detail', 'createProduct', 'productList'];
  menuRoutesForUser = ['home', 'detail'];

  menuRoutes = this.menuRoutesForAdmin;

  constructor(private _searchedPokemon: SelectedPokemonService,
              private _pokemonService: PokemonService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
    if (this.isAdmin) {
      this.menuRoutes = this.menuRoutesForAdmin;
    } else {
      this.menuRoutes = this.menuRoutesForUser;
      this.router.navigateByUrl('home');
    }
  }

  searchForPokemon(event: any) {
    this._searchedPokemon.setSearchedPokemon(event.target.value);
  }

  checkIfExist(event: any) {
    this._pokemonService.getPokemonDetail(event.target.value).subscribe(
      (response) => {
        this.goToPokemonDetail(event.target.value);
        this._searchedPokemon.setSelectedPokemon(event.target.value);
      },
      error => {
        this._searchedPokemon.setErrorMessage('This pokemon does not exist');
      })
  }

  goToPokemonDetail(name: string) {
    this._searchedPokemon.setSelectedPokemon(name);
    this.router.navigateByUrl('detail');
  }
}
