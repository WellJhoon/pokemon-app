import { Component, OnInit } from '@angular/core';
import { PokeserviceService } from '../../services/pokeservice.service';
import { Poke } from '../../interfaces/pokemons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent implements OnInit {
  pokemons: Poke[] = [];

  constructor(private pokemonService: PokeserviceService) {}
  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe({
      next: (res) => {
        this.pokemons = res.results;
        console.log(res);
      },
      error: (err) => {
        if (err.status == 400) {
          console.log(err);
        }
        console.log(err);
      },
    });
  }
}
