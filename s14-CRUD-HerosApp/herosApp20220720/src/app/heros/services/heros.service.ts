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

  addHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.httpClient.put<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }

  deleteHero(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/heroes/${id}`);
  }
}
