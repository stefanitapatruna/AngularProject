import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { DetailComponent } from './components/detail/detail.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path: 'pokemon', component: PokemonListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'detail', component: DetailComponent},
  { path: 'createProduct', component: CreateProductComponent },
  { path: 'productList', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
