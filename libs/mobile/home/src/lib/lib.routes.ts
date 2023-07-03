import { Route } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

export const mobileHomeRoutes: Route[] = [
  { path: '', component: HomePageComponent },
  /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
];
