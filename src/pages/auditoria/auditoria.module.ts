import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuditoriaPage } from './auditoria';
import { AuditProcessProvider } from '../../providers/audit-process/audit-process';
//import { ItensChecklistPage } from '../itens-checklist/itens-checklist';

@NgModule({
  declarations: [
    AuditoriaPage,
   // ItensChecklistPage
  ],
  imports: [
    IonicPageModule.forChild(AuditoriaPage),
  ],
  providers:[
    AuditProcessProvider
  ]
})
export class AuditoriaPageModule {}
