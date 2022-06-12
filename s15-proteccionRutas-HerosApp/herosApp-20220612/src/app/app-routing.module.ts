import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'heroes',
    loadChildren: () =>
      import('./heros/heros.module').then((m) => m.HerosModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  {
    path: '404',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
