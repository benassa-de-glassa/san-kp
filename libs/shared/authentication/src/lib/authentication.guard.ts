import { inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take } from 'rxjs';
import { AuthenticationService } from './authentication.service';

export const AuthentcationGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthenticationService).isAuthenticated$.pipe(take(1));
};
