import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent implements OnInit{

  username = 'Admin';
  password = signal<string>('dummy');
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  private router = inject(Router);

  /*
  use inject function instead constructor parameter injection
  eslint-disable-next-line @angular-eslint/prefer-inject
  constructor( private router: Router) { /* empty * / }
  */

  ngOnInit(): void {
    // initialization logic here
    throw new Error('Method not implemented.');
  }

  handleLogin() {
    // console.log(this.username + "-" + this.password());
    if(this.username==="Admin" && this.password() === 'dummy') {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
