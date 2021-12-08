import { Injectable } from '@angular/core';
import { AppConfig } from "../../configuration/appConfig";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConfigAppService extends AppConfig {

  constructor( private http: HttpClient) {
    super();
  }

  load() {
    return this.http.get<AppConfig>('app.config.json')
      .toPromise()
      .then( data => {
        this.pokemonBaseApi = data.pokemonBaseApi;
        this.pokemonDamage = data.pokemonDamage;
        this.pokemonEvolution = data.pokemonEvolution;
        this.pokemonSpecies = data.pokemonSpecies
        this.pokemonDetailsBaseApi=data.pokemonDetailsBaseApi;
      })
      .catch(()=> {
        console.error("Could not load configuration");
      });
  }
}
