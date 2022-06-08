import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

const emptyPersonaje = { nombre: 'xxx', poder: 0 };

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  personajes: Personaje[] = [];

  nuevoPersonaje: Personaje = { nombre: 'per1', poder: 14000 };

  cambiarNombre(event: any) {
    this.nuevoPersonaje.nombre = event.target.value;
    console.log(this.nuevoPersonaje);
  }
}
