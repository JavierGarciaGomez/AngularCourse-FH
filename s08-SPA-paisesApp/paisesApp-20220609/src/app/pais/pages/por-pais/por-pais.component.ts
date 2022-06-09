import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent implements OnInit {
  constructor(private paisService: PaisService) {}
  ngOnInit(): void {}

  termino: string = '';
  placeholder = '';
  hayError: boolean = false;
  paises: Country[] = [];

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(
      (countries) => {
        console.log('resp', countries);
        this.paises = countries;
      },
      (err) => {
        this.hayError = true;
        console.log('error', err.message);
      }
    );
  }
  getSugerencias(termino: string) {
    this.hayError = false;
    this.buscar(termino);
  }
}
