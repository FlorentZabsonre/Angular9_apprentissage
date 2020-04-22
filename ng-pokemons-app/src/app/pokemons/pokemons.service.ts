import { Injectable } from '@angular/core'; 
import { Pokemon } from './pokemon'; 
import { POKEMONS } from './mock-pokemon'; 
@Injectable({
 providedIn: 'root',
}) 
export class PokemonsService {

    //retourne tous les pokémons
    getPokemons(): Pokemon[]
    {
            return POKEMONS;
    }
    // Retourne le pokémon avec l'identifiant passé en paramètre 
    getPokemon(id: number) { 
        let pokemons= this.getPokemons();
        for(let i= 0; i<= pokemons.length; i ++)
        {
            if(id === pokemons[i].id)
            {
                return pokemons[i];
            }
        }
    }
    getPokemonTypes():Array<string>
    {
        return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
        'Poison', 'Fée', 'Vol', 'Combat', 'Psy' ];
    }
}