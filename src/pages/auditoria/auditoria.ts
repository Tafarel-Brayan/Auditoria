import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-auditoria',
	templateUrl: 'auditoria.html'
})
export class AuditoriaPage {

	params = {
		audi_id: null
	};
	_usua_len: boolean;
	_empresa:string = sessionStorage.getItem('usem_empr_id');
	

	summaryRoot = 'SummaryPage'
	checklistRoot = 'ChecklistPage'
	summaryAuditorRoot = 'SummaryAuditorPage'

	audi_id:number;


	constructor(public navCtrl: NavController,
				private navParams: NavParams) {
		
		this.params.audi_id = this.navParams.get('audi_id');

		if(this._empresa != '1'){
			this._usua_len = (this.navParams.get('usua_nome_len') == null || this.navParams.get('usua_nome_len') == "") ? false: true;
		}else{
			this._usua_len = true;
		}

	}
	
}
	