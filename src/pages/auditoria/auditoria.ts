import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-auditoria',
	templateUrl: 'auditoria.html'
})
export class AuditoriaPage {

	params = { audi_id: null };

	summaryRoot = 'SummaryPage'
	checklistRoot = 'ChecklistPage'
	summaryAuditorRoot = 'SummaryAuditorPage'

	audi_id:number;


	constructor(public navCtrl: NavController,
				private navParams: NavParams) {
		
		this.params.audi_id = this.navParams.get('audi_id');
		
	}
	
}
	