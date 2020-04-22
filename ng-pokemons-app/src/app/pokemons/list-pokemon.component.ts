import { POKEMONS } from './mock-pokemon';
import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from './pokemon';
@Component({ 
    selector: 'list-pokemon', 
    templateUrl: './list-pokemon.component.html', 
   })

   export class ListPokemonComponent  implements OnInit
   {

    constructor(private router: Router) {};
    pokemons: Pokemon[] =null;
    ngOnInit() { 
        this.pokemons = POKEMONS; 
      } 
    selectPokemon(pokemon: Pokemon): void { 
        let link = ['/pokemon', pokemon.id]; 
        this.router.navigate(link); 
       }
   }
   