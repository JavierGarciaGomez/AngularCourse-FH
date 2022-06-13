import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent implements OnInit {
  constructor() {}

  persona: Persona = {
    nombre: '',
    favoritos: [
      { nombre: 'Breath of the Wild', id: 1 },
      { nombre: 'Metal Gear Solid', id: 2 },
      { nombre: 'Fallout 3', id: 3 },
    ],
  };
  nuevoJuego = '';

  ngOnInit(): void {}

  guardar() {}
  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    };

    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }
  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }
}
