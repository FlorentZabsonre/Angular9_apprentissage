import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.modules'; 
import { PokemonsModule } from './pokemons/pokemons.modules';
 
import { AppComponent } from './app.component'; 
import { PageNotFoundComponent } from './page-not-found.component';
 
@NgModule({ 
 // L'odre de chargement des modules est très important
 // par rapport à l'ordre de déclaration des routes !
 imports: [ 
  BrowserModule, 
  PokemonsModule, 
  AppRoutingModule // pour l'ordre de déclaration des routes ! 
 ], 
 declarations: [ 
  AppComponent, 
  PageNotFoundComponent 
 ], 
 bootstrap: [AppComponent] 
}) 
export class AppModule { }