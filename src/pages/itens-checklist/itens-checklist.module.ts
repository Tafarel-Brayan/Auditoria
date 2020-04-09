import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItensChecklistPage } from './itens-checklist';

@NgModule({
  declarations: [
    //ItensChecklistPage,
  ],
  imports: [
    IonicPageModule.forChild(ItensChecklistPage),
  ],
})
export class ItensChecklistPageModule {}
