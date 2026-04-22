import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu/menu";
import { FooterComponent } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, FooterComponent],   // , Welcome, Login
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('full-stack-todo');
  message = 'Welcome to Full Stack Demo';
}
