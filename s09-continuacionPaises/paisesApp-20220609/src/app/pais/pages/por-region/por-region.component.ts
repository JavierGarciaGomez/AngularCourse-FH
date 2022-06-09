import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `,
  ],
})
export class PorRegionComponent implements OnInit {
  constructor(private paisService: PaisService) {}
  regiones: string[] = ['AFRICA', 'ASIA', 'AMERICAS', 'EUROPE', 'OCEANIA'];

  regionActiva: string = '';
  paises: Country[] = [];

  ngOnInit(): void {}

  getClaseCSS(region: string): string {
    return region === this.regionActiva
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    if (region === this.regionActiva) {
      return;
    }

    this.regionActiva = region;
    this.paises = [];

    this.paisService
      .getCountriesByRegion(region)
      .subscribe((paises) => (this.paises = paises));
  }
}
