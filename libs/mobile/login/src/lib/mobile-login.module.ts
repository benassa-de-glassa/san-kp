import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { mobileLoginRoutes } from './lib.routes';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(mobileLoginRoutes)],
  declarations: [LoginPageComponent],
})
export class MobileLoginModule {}
