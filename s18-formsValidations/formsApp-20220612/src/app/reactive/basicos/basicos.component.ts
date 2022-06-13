import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  constructor(private formBulder: FormBuilder) {}

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5),
  // });
  miFormulario: FormGroup = this.formBulder.group({
    nombre: ['RTX', [Validators.required, Validators.minLength(3)]],
    precio: [4, [Validators.required, Validators.min(0)]],
    existencias: [12, [Validators.required, Validators.min(0)]],
  });

  initForm = {
    producto: '',
    precio: '',
    existenica: '',
    existencias: '',
  };

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio: 1600,
    });
  }
  guardar() {
    console.log(this.miFormulario.value);
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.miFormulario.reset();
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

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }
}
