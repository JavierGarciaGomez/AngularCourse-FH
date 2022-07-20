import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // if (this.authService.auth.id) {
    //   return true;
    // }
    // console.log('Bloqueado por el AuthGuard - CAN ACTIVATE');
    // return false;
    return this.authService
      .checkAuthenticaton()
      .pipe(
        tap(
          (isAuthenticated) =>
            !isAuthenticated && this.router.navigate(['./auth/login'])
        )
      );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {
    // if (this.authService.auth.id) {
    //   return true;
    // }
    // console.log('Bloqueado por el AuthGuard - CAN LOAD');
    // return false;
    return this.authService
      .checkAuthenticaton()
      .pipe(
        tap(
          (isAuthenticated) =>
            !isAuthenticated && this.router.navigate(['./auth/login'])
        )
      );
  }
}
