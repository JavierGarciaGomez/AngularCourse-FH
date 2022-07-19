import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HerosService {
  private baseUrl: string = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  getHeros() {
    return this.httpClient.get<Hero[]>(`${this.baseUrl}/heroes`);
  }
  getHeroById(id: string): Observable<Hero> {
    return this.httpClient.get<Hero>(`${this.baseUrl}/heroes/${id}`);
  }

  getSuggestions(termino: string): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(
      `${this.baseUrl}/heroes?q=${termino}&_limit=6`
    );
  }
}
