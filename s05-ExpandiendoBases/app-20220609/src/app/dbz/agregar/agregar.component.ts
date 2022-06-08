import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

const emptyPersonaje = { nombre: '', poder: 0 };

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent implements OnInit {
  constructor(private dbzService: DbzService) {}

  ngOnInit(): void {}

  @Input() nuevoPersonaje: Personaje = { nombre: 'defectuoso', poder: 100 };
  // 64 output
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevoPersonaje.nombre.trim().length === 0) {
      return;
    }
    // this.onNuevoPersonaje.emit(this.nuevoPersonaje);

    this.dbzService.agregarPersonaje(this.nuevoPersonaje);
    console.log('nuevo personaje', this.nuevoPersonaje);

    this.nuevoPersonaje = { ...emptyPersonaje };
  }
}
