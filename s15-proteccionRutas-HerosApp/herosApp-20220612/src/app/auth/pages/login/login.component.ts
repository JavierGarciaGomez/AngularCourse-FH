import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
  usuario!: Auth;
  ngOnInit(): void {}

  login() {
    this.authService.login().subscribe((resp) => {
      if (resp.id) {
        this.usuario = resp;
        console.log(resp);
        this.router.navigate(['./heroes']);
      }
    });
  }
  ingresarSinLogin() {
    this.authService.logout();
    this.router.navigate(['./heroes']);
  }
}
