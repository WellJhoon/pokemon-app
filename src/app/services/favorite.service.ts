// favorites.service.ts
import { Injectable } from '@angular/core';
import { favorito } from '../interfaces/favorite';
import { Poke } from '../interfaces/pokemons';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritesKey = 'pokemonFavorites';

  getFavorites(): Poke[] {
    const favoritesString = sessionStorage.getItem(this.favoritesKey);
    return favoritesString ? JSON.parse(favoritesString) : [];
  }

  addFavorite(pokemon: Poke): void {
    const favorites = this.getFavorites();
    let id = Date.now();
    pokemon.id = id;
    favorites.push(pokemon);
    sessionStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    alert('Pokemon Agregado a favorito');
  }

  updateAlias(id: number | undefined, name: string): void {
    const favorites = this.getFavorites();
    const index = favorites.findIndex((fav) => fav.id == id);
    if (index !== -1) {
      favorites[index].name = name;
      sessionStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    }
  }

  removeFavorite(id: number | undefined): void {
    const favorites = this.getFavorites().filter((fav) => fav.id !== id);
    sessionStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    alert('Elemento Eliminado');
  }
}
