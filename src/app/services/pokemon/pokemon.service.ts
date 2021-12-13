import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ConfigAppService } from "../config/config-app.service";
import { PokemonsBook } from "../../interfaces/pokemonsBook";
import { PokemonData } from "../../interfaces/pokemonData";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonBaseApi: string;
  private pokemonEvolution: string;
  private pokemonSpecies: string;
  private pokemonDamage: string;
  private pokemonDetailsBaseApi: string;
  private pokemonCategoriesUrl: string;

  constructor(private configuration: ConfigAppService, private http: HttpClient) {
    this.pokemonBaseApi = configuration.pokemonBaseApi ;
    this.pokemonEvolution = configuration.pokemonEvolution;
    this.pokemonSpecies = configuration.pokemonSpecies;
    this.pokemonDamage = configuration.pokemonDamage;
    this.pokemonDetailsBaseApi = configuration.pokemonDetailsBaseApi;
    this.pokemonCategoriesUrl = configuration.pokemonCategoriesUrl;
  }

  getPokemons(url:string): Observable<PokemonsBook> {
    return this.http.get<PokemonsBook>(url);
  }

  getPokemonDetail(name:string): Observable<PokemonData> {
    return this.http.get<PokemonData>(this.pokemonDetailsBaseApi + name);
  }

  getImage(imageUrl: string): Observable<Blob> {
    return this.http.get(imageUrl, { responseType: 'blob' });
  }

  getPokemonCategories ():Observable<any> {
    return this.http.get(this.pokemonCategoriesUrl);
  }

  getPokemonImageUrl(name:string) {
  }
}
