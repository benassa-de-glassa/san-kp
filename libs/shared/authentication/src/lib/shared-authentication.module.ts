import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { sharedAuthenticationRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(sharedAuthenticationRoutes)],
})
export class SharedAuthenticationModule {}
