import { Component, OnInit } from '@angular/core';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';
import {
  nombreApellidoPattern,
  emailPattern,
  noPuedeSerStrider,
} from '../../../shared/validator/validaciones';
import {
  FormBuilder,
  Validators,
  FormGroup,
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
    private validatorService: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  miFormulario: FormGroup = this.formBuilder.group(
    {
      nombre: [
        'Javi',
        [
          Validators.required,
          Validators.pattern(this.validatorService.nombreApellidoPattern),
        ],
      ],
      email: [
        'javi@mail.com',
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
        [this.emailValidator],
        // [this.emailValidator],
      ],

      username: [
        'javi',
        [Validators.required, this.validatorService.noPuedeSerStrider],
      ],
      password: ['secret', [Validators.required, Validators.minLength(6)]],
      password2: ['secret', [Validators.required]],
    },
    {
      validators: [
        this.validatorService.camposIguales('password', 'password2'),
      ],
    }
  );

  ngOnInit(): void {}

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  submitFormulario() {
    this.miFormulario.markAllAsTouched();
    console.log(this.miFormulario.value);
  }

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.['required']) {
      return 'Email es obligatorio';
    } else if (errors?.['pattern']) {
      return 'El valor ingresado no tiene formato de correo';
    } else if (errors?.['emailTomado']) {
      return 'El email ya fue tomado';
    }

    return '';
  }
}
