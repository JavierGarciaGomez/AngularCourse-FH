import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent implements OnInit {
  constructor(private gifsService: GifsService) {}

  ngOnInit(): void {}

  // 81 @ViewChild

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length === 0) {
      return;
    }

    this.txtBuscar.nativeElement.value = '';
    this.gifsService.buscarGifs(valor);
  }
}
