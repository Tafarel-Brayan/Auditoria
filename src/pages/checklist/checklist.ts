import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

import { ItensChecklistPage } from '../itens-checklist/itens-checklist';

import { AuditProcessInterface } from '../../providers/audit-process/audit-process-interface';
import { AuditProcessProvider } from '../../providers/audit-process/audit-process';

import { AuditScoreProvider } from './../../providers/audit-score/audit-score';
import { AuditProvider } from './../../providers/audit/audit';

import { HomePage } from './../home/home';

@IonicPage()
@Component({
  selector: 'page-checklist',
  templateUrl: 'checklist.html',
})
export class ChecklistPage {

	audi_id:number;
	processos: AuditProcessInterface[];
	_empresa:string = sessionStorage.getItem('usem_empr_id');
	_concluirAuditoria:boolean = false;

	//Será necessário somente quando lenovo for finalizar a auditoria
	_judgement = {
		audi_judgement_justification: '',
		audi_comments: '',
		audi_id: 0,
		empresa: ''
	}

	constructor(public navCtrl: NavController,
				public navParams: NavParams,
				private auditProcessProvider: AuditProcessProvider,
				private auditScoreProvider: AuditScoreProvider,
				private auditProvider: AuditProvider,
				private toastCtrl: ToastController,
				private loadingCtrl: LoadingController) {
	}
	
	ionViewDidEnter() {
		this.audi_id = this.navParams.get('audi_id');

		this.auditScoreProvider.getTotal(this.audi_id, this._empresa)
			.subscribe(
				data => {
					if(this._empresa == '1'){
						this._concluirAuditoria = (data.total == data.total_digiboard) ? true : false;
					}else{
						this._concluirAuditoria = (data.total == data.total_lenovo) ? true : false;
					}
				}
			);

		this.auditProcessProvider.getProcess(this.audi_id)
			.subscribe(data => this.processos = data);
	}

	irParaItens(proc_id){
		this.navCtrl.push(ItensChecklistPage, {
			audi_id: this.audi_id,
			proc_id: proc_id
		});
	}

	concluirAuditoria(){
		let loader = this.loadingCtrl.create({
			content: 'Aguarde...'
		});

		loader.present();

		this._judgement.audi_id = this.audi_id;
		this._judgement.empresa = this._empresa;
		console.log(this._judgement);


		this.auditProvider.concluirAuditoria(this._judgement)
		.subscribe(
			data=>{
			},
			err => {
				this.showToast(err, 3000, 'bottom');
			},
			() => {
				setTimeout(()=>{
					loader.dismiss();
					this.showToast('Auditoria Finalizada com Sucesso!', 3000, 'bottom');
					this.navCtrl.setRoot(HomePage)
				}, 1500);
			}
		);

	}

	showToast(m, d, p){
		
		let toast = this.toastCtrl.create({
			message: m,
			duration: d,
			position: p
		});

		toast.present();
	}
}