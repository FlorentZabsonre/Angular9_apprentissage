import { POKEMONS } from './mock-pokemon';
import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service';
@Component({ 
    selector: 'list-pokemon', 
    templateUrl: './list-pokemon.component.html', 
   })

   export class ListPokemonComponent  implements OnInit
   {

    constructor(private router: Router, 
      private pokemonsService: PokemonsService) {};
      pokemons: Pokemon[] =null;

    selectPokemon(pokemon: Pokemon): void { 
      let link = ['/pokemon', pokemon.id]; 
      this.router.navigate(link); 
      }
    /*
    ngOnInit() { 
        this.pokemons = POKEMONS; 
        this.pokemons=this.pokemonsService.getPokemons();
      }
      */
     getPokemons(): void { 
      this.pokemons = this.pokemonsService.getPokemons(); 
     }
     ngOnInit():void
     {
       this.getPokemons();
     } 
    
   }
   