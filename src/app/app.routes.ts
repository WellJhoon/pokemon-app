import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list-pokemon',
    loadComponent: () =>
      import('./components/pokemon-list/pokemon-list.component').then(
        (c) => c.PokemonListComponent
      ),
  },
  {
    path: 'favorite-list',
    loadComponent: () =>
      import('./components/edit-favorite/edit-favorite.component').then(
        (c) => c.EditFavoriteComponent
      ),
  },
  {
    path: 'edit-pokemons',
    loadComponent: () =>
      import('./components/edit-favorite/edit-favorite.component').then(
        (c) => c.EditFavoriteComponent
      ),
  },
  {
    path: '**',
    redirectTo: '/list-pokemon',
    pathMatch: 'full',
  },
];
