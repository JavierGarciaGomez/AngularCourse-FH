import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import { HerosRoutingModule } from './heros-routing.module';

@NgModule({
  declarations: [
    AddHeroComponent,
    SearchHeroComponent,
    HeroComponent,
    HomeComponent,
    HeroListComponent,
  ],
  imports: [CommonModule, HerosRoutingModule],
})
export class HerosModule {}
