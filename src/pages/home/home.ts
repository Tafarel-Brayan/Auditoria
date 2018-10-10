import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { AuditoriaPage } from '../auditoria/auditoria';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	
	constructor(public navCtrl: NavController,
		public authProvider: AuthProvider ) {
			
		}
		
		auditar(){
			this.navCtrl.push(AuditoriaPage);
		}
		
		ionViewCanEnter(){
			this.authProvider.isLogged().then(
				(val) => {
					if(val == undefined){
						this.navCtrl.setRoot(LoginPage);
					}
				},
				
			)
		}
		
	}
	