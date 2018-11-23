import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-auditoria',
	templateUrl: 'auditoria.html'
})
export class AuditoriaPage {

	params = {
		audi_id: null,
		usua_nome_len: null,
		permissao: null,
		judgment:null
	};

	summaryRoot = 'SummaryPage'
	checklistRoot = 'ChecklistPage'
	summaryAuditorRoot = 'SummaryAuditorPage'
	_usua_len: boolean;
	_empresa:string = sessionStorage.getItem('usem_empr_id');


	constructor(public navCtrl: NavController,
				private navParams: NavParams) {

		this.params.audi_id 		= this.navParams.get('audi_id');
		this.params.usua_nome_len 	= this.navParams.get('usua_nome_len');
		this.params.judgment 		= this.navParams.get('judgment');

		if(this._empresa != '1'){
			this._usua_len = (this.params.usua_nome_len == null || this.params.usua_nome_len == "") ? false: true;
		}else{
			this._usua_len = true;
		}
		
		this.params.permissao = this._usua_len;

	}

}
	