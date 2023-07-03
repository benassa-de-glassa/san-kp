import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { mobileHomeRoutes } from './lib.routes';
import { HomePageComponent } from './home-page/home-page.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(mobileHomeRoutes), IonicModule],
  declarations: [HomePageComponent],
})
export class MobileHomeModule {}
