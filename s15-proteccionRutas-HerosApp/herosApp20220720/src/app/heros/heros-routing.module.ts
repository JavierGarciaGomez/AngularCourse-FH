import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { HeroComponent } from './pages/hero/hero.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'list', component: HeroListComponent },
      { path: 'addHero', component: AddHeroComponent },
      { path: 'edit/:id', component: AddHeroComponent },
      { path: 'search', component: SearchHeroComponent },
      { path: ':id', component: HeroComponent },
      { path: '**', redirectTo: 'list' },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerosRoutingModule {}
