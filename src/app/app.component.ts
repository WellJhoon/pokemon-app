import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pokemon-app';

  links = [
    {
      path: 'list-pokemon',
      name: 'List Pokemon',
    },
    {
      path: 'favorite-list',
      name: 'Favorite List',
    },
  ];
}
