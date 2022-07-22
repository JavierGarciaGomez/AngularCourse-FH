import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent implements OnInit {
  a = 0;
  persona: any;
  constructor(private formBuilder: FormBuilder) {}

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['Javier', [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array(
      [['Metal Gear'], ['Death Stranding']],
      Validators.required
    ),
  });

  nuevoFavorito: FormControl = this.formBuilder.control(
    '',
    Validators.required
  );

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  ngOnInit(): void {
    // this.miFormulario.reset({
    //   nombre: '',
    // });
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }

    this.favoritosArr.push(
      this.formBuilder.control(this.nuevoFavorito.value, Validators.required)
    );

    this.nuevoFavorito.reset();
  }

  borrar(i: number) {
    this.favoritosArr.removeAt(i);
  }
}
