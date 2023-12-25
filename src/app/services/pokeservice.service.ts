import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { favorito } from '../interfaces/favorite';

@Injectable({
  providedIn: 'root',
})
export class PokeserviceService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemons(limit?: number, offset?: number): Observable<any> {
    const url = `${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`;
    return this.http.get(url);
  }

  editPokemon(id: number, pokemon: favorito): Observable<unknown> {
    const url = '';
    return this.http.put(url, pokemon);
  }

  deletePokemon(id: number): Observable<string> {
    const url = '';
    return this.http.delete<string>(url);
  }

  getDetails(name: string) {
    const url = this.apiUrl + `/pokemon/${name}`;
    return this.http.get<any>(url);
  }
  getPokemonNextPage(url: string) {
    return this.http.get<any>(url);
  }
}
