import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstateMenuPage } from './estate-menu';

@NgModule({
  declarations: [
    EstateMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(EstateMenuPage),
  ],
})
export class EstateMenuPageModule {}
