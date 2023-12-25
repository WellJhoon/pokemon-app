import { Component, OnInit } from '@angular/core';
import { PokeserviceService } from '../../services/pokeservice.service';
import { Poke } from '../../interfaces/pokemons';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../../services/favorite.service';
import { Rochy } from '../../interfaces/pokemonDetails';
import { Observable, catchError, map } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent implements OnInit {
  pokemons: Poke[] = [];
  next = '';
  previous = '';
  constructor(
    private pokemonService: PokeserviceService,
    private favoriteService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe({
      next: (res) => {
        this.pokemons = res.results;
        this.next = res.next;
        this.previous = res.previous;
      },
      error: (err) => {
        if (err.status == 400) {
          console.log(err);
        }
        console.log(err);
      },
    });
  }

  addFav(pokemon: Poke) {
    this.favoriteService.addFavorite(pokemon);
  }
  getNextPage() {
    this.pokemonService.getPokemonNextPage(this.next).subscribe({
      next: (res) => {
        this.pokemons = res.results;
        this.next = res.next;
        this.previous = res.previous;
      },
      error: (err) => {
        if (err.status == 400) {
          console.log(err);
        }
        console.log(err);
      },
    });
  }
  getPreviousPage() {
    this.pokemonService.getPokemonNextPage(this.previous).subscribe({
      next: (res) => {
        this.pokemons = res.results;
        this.next = res.next;
        this.previous = res.previous;
      },
      error: (err) => {
        if (err.status == 400) {
          console.log(err);
        }
      },
    });
  }

  getPokemonImage(url: string): string {
    const pokemonNumber = url.split('/').filter(Boolean).pop();
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`;
    return imageUrl;
  }
}
