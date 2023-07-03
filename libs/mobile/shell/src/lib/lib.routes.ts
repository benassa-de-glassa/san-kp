import { Route } from '@angular/router';
import { AuthentcationGuard } from '@san-kp/shared/authentication';

export const mobileShellRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('@san-kp/mobile/home').then((m) => m.MobileHomeModule),
    canActivate: [AuthentcationGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('@san-kp/mobile/login').then((m) => m.MobileLoginModule),
  },
];
