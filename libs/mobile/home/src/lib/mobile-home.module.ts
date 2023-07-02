import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { mobileHomeRoutes } from './lib.routes';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(mobileHomeRoutes)],
  declarations: [HomePageComponent],
})
export class MobileHomeModule {}
