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

	constructor(public navCtrl: NavController,
		public authProvider: AuthProvider,
		public vwAuditProvider:VwListAuditRespStatusProvider
		) {
			
		}
		
		auditar(audi_id){
			this.navCtrl.push(AuditoriaPage, {audi_id:audi_id});
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
	