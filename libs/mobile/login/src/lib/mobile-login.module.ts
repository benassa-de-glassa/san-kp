import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { mobileLoginRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(mobileLoginRoutes)],
})
export class MobileLoginModule {}
