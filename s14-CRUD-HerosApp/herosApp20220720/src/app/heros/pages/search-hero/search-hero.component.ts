import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';
import { HerosService } from '../../services/heros.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styles: [],
})
export class SearchHeroComponent implements OnInit {
  searchedTerm: string = '';
  heros: Hero[] = [];
  selectedHero: Hero | undefined;

  constructor(private herosService: HerosService) {}

  ngOnInit(): void {}

  searching() {
    this.herosService
      .getSuggestions(this.searchedTerm.trim())
      .subscribe((heroes) => (this.heros = heroes));
  }

  selectedOption(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    const heroe: Hero = event.option.value;
    this.searchedTerm = heroe.superhero;

    this.herosService
      .getHeroById(heroe.id!)
      .subscribe((heroe) => (this.selectedHero = heroe));
  }
}
