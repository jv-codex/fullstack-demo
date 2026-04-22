import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthentication } from '../../services/hardcoded-authentication';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {

  username = signal<string>('Admin');
  password = signal<string>('');
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  private router = inject(Router);
  private hardcodedAuthentication = inject(HardcodedAuthentication);
   
  handleLogin() {
    if(this.hardcodedAuthentication.authenticate(this.username(), this.password())) {
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username()])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
