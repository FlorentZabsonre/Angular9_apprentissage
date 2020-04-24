import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
 
import { ListPokemonComponent } from './list-pokemon.component'; 
import { DetailPokemonComponent } from './detail-pokemon.component'; 
import { BorderCardDirective } from './border-card.directive';  
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe'; 
import { PokemonRoutingModule } from './pokemons-routing.module'; 

import{ FormsModule } from  '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form.component';


@NgModule({ 
 imports: [ 
  CommonModule ,
  PokemonRoutingModule ,
  FormsModule // nouvelle declaration
 ], 
 declarations: [ 
  ListPokemonComponent, 
  DetailPokemonComponent, 
  BorderCardDirective,
  PokemonTypeColorPipe,
  EditPokemonComponent,
  PokemonFormComponent
  
 ], 
 providers: [] 
}) 
export class PokemonsModule {}