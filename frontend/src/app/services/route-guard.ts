import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthentication } from './hardcoded-authentication';

@Injectable({
  providedIn: 'root',
})
export class RouteGuard implements CanActivate {
  private hardcodedAuthentication = inject(HardcodedAuthentication);
  private router = inject(Router);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthentication.isUserLoggedIn()) 
      return true;

    this.router.navigate(['login']);

    return false;
  }
}
