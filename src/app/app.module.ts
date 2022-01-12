import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";

//import Components
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {PokemonListComponent} from './components/pokemon-list/pokemon-list.component';
import {DetailComponent} from './components/detail/detail.component';
import {CreateProductComponent} from './components/create-product/create-product.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {NavigationLinksComponent} from './parts/navigation-links/navigation-links.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./modules/material/material.module";

//import Pipes
import {FilterPipe} from './pipes/filter.pipe';

//import Services
import {UserService} from "./services/user/user.service";
import {PokemonService} from "./services/pokemon/pokemon.service";
import {ConfigAppService} from "./services/config/config-app.service";
import {AppConfig} from "./configuration/appConfig";


//import Angular Material
import {MatButtonModule} from "@angular/material/button";
import {PokemonCardComponent} from './parts/pokemon-card/pokemon-card.component';
import { CustomPokemonComponent } from './parts/custom-pokemon/custom-pokemon.component';

export function initializerFn(configAppService: ConfigAppService) {
  return () => {
    return configAppService.load();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonListComponent,
    DetailComponent,
    CreateProductComponent,
    ProductListComponent,
    NavigationLinksComponent,
    PokemonCardComponent,
    FilterPipe,
    CustomPokemonComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    PokemonService, {
      provide: AppConfig,
      deps: [HttpClientModule],
      useExisting: ConfigAppService
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigAppService],
      useFactory: initializerFn
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
