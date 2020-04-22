import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { PokemonsService } from './pokemons.service'; 

@Component({
    selector : 'detail-pokemon',
    templateUrl : './detail-pokemon.component.html'
  })
  export class DetailPokemonComponent implements OnInit { 
    //pokemons: Pokemon[] = null; // La liste des pokémons de notre application.
    pokemon: Pokemon = null; // Le pokémon à afficher dans le template.
      
    // On injecte 'route' pour récupérer les paramètres de l'url,
    // et 'router' pour rediriger l'utilisateur.
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private pokemonsService: PokemonsService) {} 
      
    ngOnInit(): void { 
      let id = +this.route.snapshot.paramMap.get('id');
      this.pokemon = this.pokemonsService.getPokemon(id);
    } 
     
    goBack(): void { 
      this.router.navigate(['/pokemons']); 
    } 
    
   }