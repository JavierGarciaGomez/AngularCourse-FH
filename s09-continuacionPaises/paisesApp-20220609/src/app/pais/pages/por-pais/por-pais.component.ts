import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent implements OnInit {
  constructor(private paisService: PaisService) {}
  ngOnInit(): void {}

  mostrarSugerencias: boolean = false;
  termino: string = '';
  placeholder = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];

  buscar(termino: string) {
    this.mostrarSugerencias = false;
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
    // this.buscar(termino);
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino).subscribe(
      (paises) => (this.paisesSugeridos = paises.splice(0, 5)),
      (err) => (this.paisesSugeridos = [])
    );
  }
  buscarSugerido(termino: string) {
    this.buscar(termino);
  }
}
