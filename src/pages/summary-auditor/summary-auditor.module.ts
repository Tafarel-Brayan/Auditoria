import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SummaryAuditorPage } from './summary-auditor';

@NgModule({
  declarations: [
    SummaryAuditorPage,
  ],
  imports: [
    IonicPageModule.forChild(SummaryAuditorPage),
  ],
})
export class SummaryAuditorPageModule {}
