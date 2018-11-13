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

	constructor(public navCtrl: NavController,
		public authProvider: AuthProvider,
		public vwAuditProvider:VwListAuditRespStatusProvider
		) {
			
	}
	
	auditar(audi_id){

		let index = this.dataHome.map( e=> e.audi_id).indexOf(audi_id);
		console.log(this.dataHome[index].usua_nome_len);
		let usuaLen = this.dataHome[index].usua_nome_len;
		console.log(usuaLen);
		
		// if(this._empresa != '1' && (this.dataHome[index].usua_nome_len == null || this.dataHome[index].usua_nome_len == '')){
		// 	console.log("EBA!");
		// }else{
		// 	console.log("Ahhhh =(");
		// }

		this.navCtrl.push(
			AuditoriaPage,
			{
				audi_id:audi_id,
				usua_nome_len: usuaLen
			}
		);
	}

	ionViewDidLoad(){

		this.vwAuditProvider.findAll()
		.subscribe(
			data => this.dataHome = data
		)

	}
	
	ionViewCanEnter(){
		if(this.authProvider.isLogged() === null ){
			this.navCtrl.setRoot(LoginPage);
		}
	}
		
}
	