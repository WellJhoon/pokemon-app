import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorite.service';
import { Poke } from '../../interfaces/pokemons';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.scss',
})
export class FavoriteListComponent implements OnInit {
  PokemonFav: Poke[] = [];
  form: FormGroup;
  editable: boolean = false;

  constructor(private faborito: FavoritesService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: '',
    });
  }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.PokemonFav = this.faborito.getFavorites();
  }

  deletFav(id?: number | undefined) {
    this.faborito.removeFavorite(id);
    this.getPokemons();
  }

  edit(id: number | undefined) {
    this.faborito.updateAlias(id, this.form.value.name);
    this.editable = !this.editable;
    this.getPokemons();
  }
}
