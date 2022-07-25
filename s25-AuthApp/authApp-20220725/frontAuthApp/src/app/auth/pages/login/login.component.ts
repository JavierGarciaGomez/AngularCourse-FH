import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

// import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  miFormulario: FormGroup = this.fb.group({
    email: ['pablo@pablo.com', [Validators.required, Validators.email]],
    password: ['secreto', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  login() {
    const { email, password } = this.miFormulario.value;

    this.authService.login(email, password).subscribe((response) => {
      if (response === true) {
        this.router.navigateByUrl('/dashboard');
      } else {
        console.log({ response });
        Swal.fire('Error', response, 'error');
      }
    });
  }
}
