import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	
	credentialsForm: FormGroup;
		
	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		private formBuilder: FormBuilder,
		public auth: AuthProvider,
		private storage: Storage,
		public toastCtrl: ToastController
		) {
			this.credentialsForm = this.formBuilder.group({
				usuario:['', Validators.required],
				senha:['', Validators.required],
				
			})
		}
		
		logar(){
			
			this.auth.login(this.credentialsForm.controls.usuario.value, this.credentialsForm.controls.senha.value)
			.subscribe( (data) =>  {
				
				this.storage.set("usua_id", data.usua_id);
				this.storage.set("usua_nome", data.usua_nome);
				this.storage.set("usua_login", data.usua_login);
				this.storage.set("usua_cpf", data.usua_cpf);
				this.storage.set("usem_empr_id", data.usem_empr_id);
				this.storage.set("usem_empr_nome", data.usem_empr_nome);
				this.navCtrl.setRoot(HomePage);
				
			},
			err => {
				this.showToast("Usuário ou senha inválido!", 3000, "bottom");
			}
			);
			
			
		}
		
		showToast(msg, d=3000, p='bottom'){
			
			let toast = this.toastCtrl.create({
				message: msg,
				duration: d,
				position: p
			});

			toast.present();
		}
		
	}
	