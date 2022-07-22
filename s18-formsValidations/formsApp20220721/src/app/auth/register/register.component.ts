import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../../shared/validator/validator.service';
import {
  nombreApellidoPattern,
  emailPattern,
  noPuedeSerStrider,
} from '../../shared/validator/validations';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService
  ) {}

  miFormulario: FormGroup = this.formBuilder.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.nombreApellidoPattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
        [this.validatorService],
      ],
      username: [
        '',
        [Validators.required, this.validatorService.noPuedeSerStrider],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [
        this.validatorService.camposIguales('password', 'password2'),
      ],
    }
  );

  campoInvalido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Javi',
      email: 'javi@mail.com',
      username: 'stride',
      password: 'password',
      password2: 'password',
    });
  }

  submitForm() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.required) {
      return 'Email es obligatorio';
    } else if (errors?.pattern) {
      return 'El valor ingresado no tiene formato de correo';
    } else if (errors?.emailTomado) {
      return 'El email ya fue tomado';
    }

    return '';
  }
}
