import { Routes } from '@angular/router';

import { ErrorComponent } from './error/error';
import { LoginComponent } from './login/login';
import { WelcomeComponent } from './welcome/welcome';
import { ListTodosComponent } from './listtodos/listtodos';
import { ListtodosReloadedComponent } from './listtodos-reloaded/listtodos-reloaded';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent },
  { path: 'todos', component: ListTodosComponent },
  { path: 'todosReload', component: ListtodosReloadedComponent },

  { path: '**', component: ErrorComponent },
];
