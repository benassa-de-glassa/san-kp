import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { mobileHomeRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(mobileHomeRoutes)],
})
export class MobileHomeModule {}
