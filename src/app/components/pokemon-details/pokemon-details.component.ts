import { Component, Signal, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeserviceService } from '../../services/pokeservice.service';
import { Rochy } from '../../interfaces/pokemonDetails';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss',
})
export class PokemonDetailsComponent {
  params = this.route.snapshot.paramMap;
  name: string = String(this.params.get('name'));
  pokemon: Rochy | undefined;
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokeserviceService
  ) {
    this.pokemonService.getDetails(this.name).subscribe({
      next: (res: Rochy) => {
        this.pokemon = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
