import { Component, OnInit } from '@angular/core'; 
  
@Component({ 
 selector: 'app-root', 
 template: `<h1>Hello, Angular 2 !</h1>`, 
})
export class AppComponent implements OnInit{ 
 private pokemons: Pokemon[];
 
 ngOnInit()
 {
   this.pokemons=[
     { name: 'Bulbizarre', hp: 6},
     { name: 'Salamèche', hp: 6},
     { name: 'Carapuce', hp: 6}
   ];
 }
}