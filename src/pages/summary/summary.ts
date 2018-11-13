import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SummaryInterface } from './summary-interface';
import { AuditScoreProvider } from './../../providers/audit-score/audit-score';
import { AuditProcessProvider } from './../../providers/audit-process/audit-process';
import { AuditProvider } from '../../providers/audit/audit';

import { Chart } from 'chart.js';

@IonicPage()
@Component({
    selector: 'page-summary',
    templateUrl: 'summary.html',
})
export class SummaryPage {

    _audi_id:number;
    _usua_len: boolean;
    _empresa:string = sessionStorage.getItem('usem_empr_id');
    _usua_id:string = sessionStorage.getItem('usua_id');
    _summary: SummaryInterface[];
    _summaryTb1 : any[];
    _resultScore:string;


    @ViewChild('radarCanvas') radarCanvas;
    _radarChart: any;
 
    
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private audit: AuditProvider,
                private auditProcessProvider: AuditProcessProvider,
                private auditScoreProvider: AuditScoreProvider) {
    }

    ionViewDidEnter() {

        //this._usua_len = (this.navParams.get('usua_nome_len') != null || this.navParams.get('usua_nome_len') != "") ? true: false;
        this._audi_id = this.navParams.get('audi_id');

        if(this._empresa != '1'){
            
            console.log('audi_id:', this.navParams.get('audi_id'));
            console.log('userLen:', this.navParams.get('usua_nome_len'));

			this._usua_len = (this.navParams.get('usua_nome_len') == null || this.navParams.get('usua_nome_len') == "") ? false: true;
		}else{
            console.log("OIOI")
			this._usua_len = false;
		}

        this.auditProcessProvider.getSummaryTable1(this._audi_id, this._empresa)
            .subscribe( 
                data => { 
                    this._summaryTb1 = data;
                },
                err => '',
                () => {
                    this.showRadarChart();
                }
            );

        this.auditProcessProvider.getSummaryTable2(this._audi_id, this._empresa)
            .subscribe( 
                data => { this._summary = data },
                err => '',
                () => {
                    //this.showRadarChart();
                }
            );
        
        this.auditScoreProvider.resultScore(this._audi_id, this._empresa)
            .subscribe(
                data => this._resultScore = data
            )

    }

    associarUserLenovo(){
        this.audit.associarUserLenovo(this._audi_id, this._usua_id)
        .subscribe(
            (data) => {
                this._usua_len = true;
            }
        )
    }

    showRadarChart(){

        let labels = [];
        let values = [];

        let i:number = 0;

        for(let obj of this._summaryTb1){
            labels[i] = obj.aupr_proc_name;
            values[i] = obj.percent_aprovados;
            i++;
        }

        //Remove o último item de cada array
        labels.splice(-1, 1);
        values.splice(-1, 1);

        this._radarChart = new Chart(this.radarCanvas.nativeElement,{

            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    data: values,
                    backgroundColor: "rgba(232,164,12,0.4)",
                    borderColor: "rgba(212,150,12,0.4)",
                }]
            },
            options:{
                legend:{
                    display: false
                }
            }

        });

    }
    
}
