import { AuditProcessProvider } from './../../providers/audit-process/audit-process';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SummaryInterface } from './summary-interface';

@IonicPage()
@Component({
    selector: 'page-summary',
    templateUrl: 'summary.html',
})
export class SummaryPage {

    _audi_id:number;
    _empresa:string = sessionStorage.getItem('usem_empr_id');
    _summary: SummaryInterface[];
    
    constructor(public navCtrl: NavController, public navParams: NavParams, private auditProcessProvider: AuditProcessProvider) {
    }
    
    ionViewDidEnter() {
        this._audi_id = this.navParams.get('audi_id');
        this.auditProcessProvider.getSummary(this._audi_id, this._empresa)
            .subscribe( data => this._summary = data );

    }
    
}
