import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SelectedPokemonService {

  selectedPokemon: Subject<string> = new Subject<string>();

  constructor() {
  }

  setSelectedPokemon(name: string) : void {
    this.selectedPokemon.next(name);
  }

  getSelectedPokemon(): Observable<string> {
    return this.selectedPokemon;
  }
}
