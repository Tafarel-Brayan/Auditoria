import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuditoriaPage } from './auditoria';
import { AuditProcessProvider } from '../../providers/audit-process/audit-process';
import { VwAuditScoreProvider } from './../../providers/vw-audit-score/vw-audit-score';
import { VwOwnerProvider } from './../../providers/vw-owner/vw-owner';

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
    AuditProcessProvider,
    VwAuditScoreProvider,
    VwOwnerProvider

  ]
})
export class AuditoriaPageModule {}
