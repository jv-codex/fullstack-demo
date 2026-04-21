import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

  username = signal<string>('Admin');
  password = signal<string>('dummy');
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  private router = inject(Router);

  /*
  use inject function instead constructor parameter injection
  eslint-disable-next-line @angular-eslint/prefer-inject
  constructor( private router: Router) { /* empty * / }
  */

  handleLogin() {
    // console.log(this.username + "-" + this.password());
    if(this.username()==="Admin" && this.password() === 'dummy') {
      this.router.navigate(['welcome', this.username()])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
