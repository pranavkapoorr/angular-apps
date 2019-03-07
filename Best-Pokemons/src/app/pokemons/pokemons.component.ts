import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon'
import { POKEMONS } from '../mock-pokemons';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemon : Pokemon = {
    id: 123,
    name: 'Bulbasaur'
  };

  pokemons = POKEMONS;

  selectedPokemon: Pokemon;
  onSelect(pokemon: Pokemon): void {
    this.selectedPokemon = pokemon;
  }

  constructor() { }

  ngOnInit() {
  }

  

}
