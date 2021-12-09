import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SelectedPokemonService {

  //if not any pokemon selected the Detail page would show bulbasar details as a default
  selectedPokemon: BehaviorSubject<string> = new BehaviorSubject('bulbasaur');

  constructor() {
  }

  setSelectedPokemon(name: string) : void {
    this.selectedPokemon.next(name);
  }

  getSelectedPokemon(): Observable<string> {
    return this.selectedPokemon;
  }
}
