import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuditCustomerCriteriaBondProvider } from '../../providers/audit-customer-criteria-bond/audit-customer-criteria-bond';
import { CategoryCriteriaInterface } from '../../providers/audit-customer-criteria-bond/category-criteria-interface';

@IonicPage()
@Component({
  selector: 'page-itens-checklist',
  templateUrl: 'itens-checklist.html',
})
export class ItensChecklistPage {
	
	audi_id:number;
	proc_id:number;
	categoryCriterias: CategoryCriteriaInterface[];

	constructor(public navCtrl: NavController,
				public navParams: NavParams,
				private accbProvider: AuditCustomerCriteriaBondProvider) {
	}

  ionViewDidLoad() {
	
	this.audi_id = this.navParams.get('audi_id');
	this.proc_id = this.navParams.get('proc_id');
	this.accbProvider.getCategoryItemByAudit(this.audi_id, this.proc_id)
		.subscribe(
			 (data) => {
				 this.categoryCriterias = data;
			 }
		);
  }

}
