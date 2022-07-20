import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private _auth: Auth | undefined;
  private baseUrl: string = environment.baseUrl;

  get auth(): Auth {
    return { ...this._auth! };
  }
  login = () =>
    // this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(
    //   map((auth) => {
    //     this._auth = auth;
    //     return true;
    //   })
    // );
    this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(
      tap((resp) => (this._auth = resp)),
      tap((auth) => localStorage.setItem('token', auth.id))
    );

  logout() {
    this._auth = undefined;
    localStorage.removeItem('token');
  }

  checkAuthenticaton(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(
      map((auth) => {
        this._auth = auth;
        return true;
      })
    );
  }
}
