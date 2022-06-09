import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent implements OnInit {
  constructor(private paisService: PaisService) {}

  termino: string = '';
  placeholder = '';
  hayError: boolean = false;
  paises: Country[] = [];

  ngOnInit(): void {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPorCapital(this.termino).subscribe(
      (countries) => {
        console.log('resp', countries);
        this.paises = countries;
      },
      (err) => {
        this.hayError = true;
        console.log('error', err.message);
      }
    );

    // console.log('these are the results', result);
  }
  getSugerencias(termino: string) {
    this.hayError = false;
    this.buscar(termino);
  }
}
