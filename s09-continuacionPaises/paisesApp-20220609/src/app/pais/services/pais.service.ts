import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  constructor(private http: HttpClient) {}

  private apiUrl: string = 'https://restcountries.com/v3.1/';

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'name,capital,alpha2Code,flags,population,cca3'
    );
  }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarPorCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getCountryById(id: string): Observable<Country[]> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`;

    return this.http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(tap(console.log));
  }
}
