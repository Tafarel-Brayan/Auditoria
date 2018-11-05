import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SummaryInterface } from './summary-interface';
import { AuditScoreProvider } from './../../providers/audit-score/audit-score';
import { AuditProcessProvider } from './../../providers/audit-process/audit-process';

import { Chart } from 'chart.js';

@IonicPage()
@Component({
    selector: 'page-summary',
    templateUrl: 'summary.html',
})
export class SummaryPage {

    _audi_id:number;
    _empresa:string = sessionStorage.getItem('usem_empr_id');
    _summary: SummaryInterface[];
    _resultScore:string;


    @ViewChild('radarCanvas') radarCanvas;
    _radarChart: any;
 
    
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private auditProcessProvider: AuditProcessProvider,
                private auditScoreProvider: AuditScoreProvider) {
    }

    ionViewDidEnter() {
        
        this._audi_id = this.navParams.get('audi_id');

        this.auditProcessProvider.getSummary(this._audi_id, this._empresa)
            .subscribe( 
                data => { this._summary = data },
                err => '',
                () => {
                    this.showRadarChart();
                }
            );
        
        this.auditScoreProvider.resultScore(this._audi_id, this._empresa)
            .subscribe(
                data => this._resultScore = data
            )

    }

    showRadarChart(){

        let labels = [];
        let values = [];
        let i:number = 0;
        for(let obj of this._summary){
            labels[i] = obj.aupr_proc_name;
            values[i] = obj.close;
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
                },
            }

        });

    }
    
}
