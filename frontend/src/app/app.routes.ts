import { Routes } from '@angular/router';

import { ErrorComponent } from './error/error';
import { LoginComponent } from './login/login';
import { WelcomeComponent } from './welcome/welcome';
import { ListTodosComponent } from './listtodos/listtodos';
import { ListtodosReloadedComponent } from './listtodos-reloaded/listtodos-reloaded';
import { LogoutComponent } from './logout/logout';
import { RouteGuard } from './services/route-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuard] },
  { path: 'todos', component: ListTodosComponent, canActivate:[RouteGuard] },
  { path: 'todosReload', component: ListtodosReloadedComponent, canActivate:[RouteGuard] },
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGuard] },

  { path: '**', component: ErrorComponent },
];
