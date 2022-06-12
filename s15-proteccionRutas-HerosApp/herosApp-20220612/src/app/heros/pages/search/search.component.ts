import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';
import { HerosService } from '../../services/heros.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  constructor(private herosService:HerosService) { }

  termino: string  = '';
  heros: Hero[] = [];
  heroeSeleccionado: Hero | undefined;

  ngOnInit(): void {
  }

  buscando() {

    this.herosService.getSugerencias( this.termino.trim() )
      .subscribe( heros => this.heros = heros );

  }

  
  opcionSeleccionada( event: MatAutocompleteSelectedEvent ) {

    if(!event.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Hero = event.option.value;
    this.termino = heroe.superhero;

    this.herosService.getHeroById( heroe.id! )
      .subscribe( hero => this.heroeSeleccionado = hero );
  }

}
