import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuditProcessInterface } from '../../providers/audit-process/audit-process-interface';
import { AuditProcessProvider } from '../../providers/audit-process/audit-process';
import { ItensChecklistPage } from '../itens-checklist/itens-checklist';

@IonicPage()
@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html',
})
export class ChecklistPage {

	audi_id:number;
	processos: AuditProcessInterface[];

	constructor(public navCtrl: NavController,
				public navParams: NavParams,
				private auditProcessProvider: AuditProcessProvider) {
	}

	ionViewDidEnter() {
		this.audi_id = this.navParams.get('audi_id');
		this.auditProcessProvider.getProcess(this.audi_id)
		.subscribe(data => this.processos = data);
	}

	irParaItens(proc_id){
		this.navCtrl.push(ItensChecklistPage, {
			audi_id: this.audi_id,
			proc_id: proc_id
		});
	}

}