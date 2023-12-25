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
      import('./components/favorite-list/favorite-list.component').then(
        (c) => c.FavoriteListComponent
      ),
  },
  {
    path: 'pokemon/:name',
    loadComponent: () =>
      import('./components/pokemon-details/pokemon-details.component').then(
        (c) => c.PokemonDetailsComponent
      ),
  },
  {
    path: '**',
    redirectTo: '/list-pokemon',
    pathMatch: 'full',
  },
];
