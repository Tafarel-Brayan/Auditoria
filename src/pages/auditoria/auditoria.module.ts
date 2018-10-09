import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuditoriaPage } from './auditoria';

@NgModule({
  declarations: [
    AuditoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(AuditoriaPage),
  ]
})
export class AuditoriaPageModule {}
