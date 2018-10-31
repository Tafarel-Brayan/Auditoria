import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuditCustomerCriteriaBondProvider } from '../../providers/audit-customer-criteria-bond/audit-customer-criteria-bond';
import { CategoryCriteriaInterface } from '../../providers/audit-customer-criteria-bond/category-criteria-interface';
import { AuditarItemFormPage } from '../auditar-item-form/auditar-item-form';

@IonicPage()
@Component({
  selector: 'page-itens-checklist',
  templateUrl: 'itens-checklist.html',
})
export class ItensChecklistPage {
	
	audi_id:number;
	proc_id:number;
	categoryCriterias: CategoryCriteriaInterface[];
    _empresa:string = sessionStorage.getItem('usem_empr_id');
    _iconDigiboard:string;
    _iconLenovo:string;

	constructor(public navCtrl: NavController,
				public navParams: NavParams,
				private accbProvider: AuditCustomerCriteriaBondProvider) {
	}

    ionViewDidEnter() {
	
		this.audi_id = this.navParams.get('audi_id');
		this.proc_id = this.navParams.get('proc_id');
		this.accbProvider.getCategoryItemByAudit(this.audi_id, this.proc_id)
			.subscribe(
				(data) => {
                    this.categoryCriterias = data;
                    if(this._empresa == "1"){
                        
                    }else{

                    }
				}
			);
    }

    auditar(aucc_id){
		this.navCtrl.push(AuditarItemFormPage,{
			audi_id:this.audi_id,
			proc_id:this.proc_id,
			aucc_id:aucc_id
		})
    }

}
