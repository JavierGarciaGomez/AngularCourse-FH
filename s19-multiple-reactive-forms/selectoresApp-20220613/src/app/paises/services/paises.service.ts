import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaisSmall, Pais } from '../interfaces/paises.interface';
import { Observable, of, combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaisesService {
  constructor(private http: HttpClient) {}

  private _regiones: string[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];

  private baseUrl: string = 'https://restcountries.com/v3.1';

  get regiones() {
    return [...this._regiones];
  }

  getCountriesByRegion(region: string): Observable<PaisSmall[]> {
    const url: string = `${this.baseUrl}/region/${region}?fields=cca3,name`;
    //restcountries.com/v2/{service}?fields={field},{field},{field}
    https: return this.http.get<PaisSmall[]>(url);
  }

  getPaisPorCodigo(codigo: string): Observable<Pais | null> {
    if (!codigo) {
      return of(null);
    }

    const url = `${this.baseUrl}/alpha/${codigo}`;
    return this.http.get<Pais>(url);
  }

  getPaisPorCodigoSmall(codigo: string): Observable<PaisSmall> {
    const url = `${this.baseUrl}/alpha/${codigo}?fields=alpha3Code;name`;
    return this.http.get<PaisSmall>(url);
  }

  getPaisesPorCodigos(borders: string[]): Observable<PaisSmall[]> {
    if (!borders) {
      return of([]);
    }

    const peticiones: Observable<PaisSmall>[] = [];

    borders.forEach((codigo) => {
      const peticion = this.getPaisPorCodigoSmall(codigo);
      peticiones.push(peticion);
    });

    return combineLatest(peticiones);
  }
}
