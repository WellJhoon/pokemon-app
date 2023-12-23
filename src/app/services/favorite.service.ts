// favorites.service.ts
import { Injectable } from '@angular/core';
import { favorito } from '../interfaces/pokemons';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritesKey = 'pokemonFavorites';

  getFavorites(): favorito[] {
    const favoritesString = sessionStorage.getItem(this.favoritesKey);
    return favoritesString ? JSON.parse(favoritesString) : [];
  }

  addFavorite(name: string, alias: string): void {
    const favorites = this.getFavorites();
    const newFavorite: favorito = {
      name,
      alias,
      createdAt: new Date(),
    };
    favorites.push(newFavorite);
    sessionStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }

  updateAlias(name: string, newAlias: string): void {
    const favorites = this.getFavorites();
    const index = favorites.findIndex((fav) => fav.name === name);
    if (index !== -1) {
      favorites[index].alias = newAlias;
      sessionStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    }
  }

  removeFavorite(name: string): void {
    const favorites = this.getFavorites().filter((fav) => fav.name !== name);
    sessionStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }
}
