import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { AuditoriaPage } from '../auditoria/auditoria';
import { HomeInterface } from './homeInterface';
import { VwListAuditRespStatusProvider } from '../../providers/vw-list-audit-resp-status/vw-list-audit-resp-status';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	
	dataHome: HomeInterface[];
	_empresa:string = sessionStorage.getItem('usem_empr_id');
	_AuditCompleted: HomeInterface[] = new Array();
	_AuditNotCompleted: HomeInterface[] = new Array();

	constructor(public navCtrl: NavController,
		public authProvider: AuthProvider,
		public vwAuditProvider:VwListAuditRespStatusProvider
		) {
			
	}
	
	auditar(audi_id){

		let index = this.dataHome.map( e=> e.audi_id).indexOf(audi_id);
		let usuaLen = this.dataHome[index].usua_nome_len;
		let judgment = (this.dataHome[index].audi_status_digiboard == "S" && this.dataHome[index].audi_status_lenovo == "S") ? true : false;



		this.navCtrl.push(
			AuditoriaPage,
			{
				audi_id:		audi_id,
				usua_nome_len: 	usuaLen,
				judgment:		judgment
			}
		);

	}

	ionViewDidLoad(){

		this.vwAuditProvider.findAll()
		.subscribe(
			(data) => {
				this.dataHome = data;
				data.forEach(obj => {

					if(obj.audi_status_digiboard == "S" && obj.audi_status_lenovo == "S"){
						this._AuditCompleted.push(obj);
					}else{
						this._AuditNotCompleted.push(obj);
					}

				});
			}
		)

	}
	
	ionViewCanEnter(){
		if(this.authProvider.isLogged() === null ){
			this.navCtrl.setRoot(LoginPage);
		}
	}
		
}
	