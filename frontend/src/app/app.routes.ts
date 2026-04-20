import { Routes } from '@angular/router';

import { ErrorComponent } from './error/error';
import { LoginComponent } from './login/login';
import { WelcomeComponent } from './welcome/welcome';
import { ListTodosComponent } from './listtodos/listtodos';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent },
  { path: 'todos', component: ListTodosComponent },

  { path: '**', component: ErrorComponent },
];
