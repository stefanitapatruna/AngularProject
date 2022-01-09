import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SelectedPokemonService {

  //if not any pokemon selected the Detail page would show bulbasar details as a default
  selectedPokemon: BehaviorSubject<string> = new BehaviorSubject('bulbasaur');
  //searched Pokemon is the value of the search input
  searchedPokemon: BehaviorSubject<string> = new BehaviorSubject('');

  errorMessage: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {
  }

  setSelectedPokemon(name: string) : void {
    this.selectedPokemon.next(name);
  }

  getSelectedPokemon(): Observable<string> {
    return this.selectedPokemon;
  }

  setSearchedPokemon(name:string) : void {
    this.errorMessage.next('');
    this.searchedPokemon.next(name);
  }

  getSearchedPokemon():Observable<string> {
    return this.searchedPokemon;
  }

  setErrorMessage(message:string): void {
    this.errorMessage.next(message);
  }

  getErrorMessage():Observable<string> {
    return this.errorMessage;
  }
}
