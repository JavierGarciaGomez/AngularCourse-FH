import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  constructor() {}

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: '',
    precio: '',
    existenica: '',
    existencias: '',
  };

  ngOnInit(): void {}
  guardar(miForm: NgForm) {
    console.log(miForm.value);
    this.miFormulario.resetForm({
      producto: 'Nuevo producto',
      precio: 0,
      existencias: 0,
    });
  }
  nombreValido(): boolean {
    return (
      this.miFormulario?.controls['producto']?.invalid &&
      this.miFormulario?.controls['producto']?.touched
    );
  }
  precioValido(): boolean {
    return (
      this.miFormulario?.controls['precio']?.invalid &&
      this.miFormulario?.controls['precio']?.touched
    );
  }
}
