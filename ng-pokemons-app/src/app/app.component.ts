import { Component, OnInit } from '@angular/core'; 
import { Pokemon } from './pokemon'; 
import { POKEMONS } from './mock-pokemon'; 
 
@Component({ 
 selector: 'app-root', 
 templateUrl: './app.component.html', 
}) 
export class AppComponent implements OnInit {
  pokemons: Pokemon[] = null;
  ngOnInit() { 
    this.pokemons = POKEMONS; 
  } 
  selectPokemon(pokemon: Pokemon) { 
    console.log('Vous avez selectionné ' + pokemon.name); 
  } 
}