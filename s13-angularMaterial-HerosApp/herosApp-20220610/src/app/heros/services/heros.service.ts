import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HerosService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = environment.baseUrl;

  getHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes`);

  }


  getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>
    (`${ this.baseUrl }/heroes/${id}`)
  }

  getSugerencias( termino: string ): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${ this.baseUrl }/heroes?q=${ termino }&_limit=6`);
  }

}
