import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { mobileShellRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(mobileShellRoutes)],
})
export class MobileShellModule {}
