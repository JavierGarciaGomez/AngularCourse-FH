import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent implements OnInit {
  constructor(private paisService: PaisService) {}
  termino: string = 'hola';
  paises: Country[] = [];
  hayError: boolean = false;

  ngOnInit(): void {}

  buscar(termino: string) {
    this.hayError = false;
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
}
