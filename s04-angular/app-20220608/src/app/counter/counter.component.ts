import { Component } from '@angular/core';

// decorador
@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>
      La base es: <strong> {{ base }} </strong>
    </h3>

    <button (click)="acumular(base)">+ {{ base }}</button>

    <span> {{ numero }} </span>

    <button (click)="acumular(-base)">- {{ base }}</button>
  `,
})

// componente
export class CounterComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
