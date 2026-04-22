import { Component, signal } from '@angular/core';
//import { Welcome } from "./welcome/welcome";
//import { Login } from "./login/login";
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu";
import { FooterComponent } from "./footer/footer";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
//  template: '<h1>{{message}}</h1>',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, FooterComponent],   // , Welcome, Login
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('full-stack-todo');
  message = 'Welcome to in 28 Minutes';

  /* ----- ESlint testing ------

  unused = 123; // <-- ESLint should complain about this

  if (1 == '1') {}

  unusedMethod() {
    console.log('This method is never called');
  }
  */
}
