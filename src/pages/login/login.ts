import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { LoginService } from './login.service';

@IonicPage()
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
})
export class LoginPage {
	
	credentialsForm: FormGroup;
		
	constructor( public navCtrl: NavController,
				 public navParams: NavParams,
				 private formBuilder: FormBuilder,
				 public auth: AuthProvider,
				 public toastCtrl: ToastController,
				 public loginService: LoginService ) {

		this.credentialsForm = this.formBuilder.group({
			usuario:['', Validators.required],
			senha:['', Validators.required],
			
		})
	}
		
	logar(){
		
		this.auth.login(this.credentialsForm.controls.usuario.value, this.credentialsForm.controls.senha.value)
		.subscribe(
			(data) =>  {
			
				if(data){

					this.loginService.notify(
						{
							"name": data.usua_nome,
							"empresa": data.usem_empr_nome,
							"usem_empr_id": data.usem_empr_id
						}
					)

					sessionStorage.setItem("usua_id", data.usua_id);
					sessionStorage.setItem("usua_nome", data.usua_nome);
					sessionStorage.setItem("usua_login", data.usua_login);
					sessionStorage.setItem("usua_cpf", data.usua_cpf);
					sessionStorage.setItem("usem_empr_id", ""+data.usem_empr_id);
					sessionStorage.setItem("usem_empr_nome", data.usem_empr_nome);
					this.navCtrl.setRoot(HomePage);

				}else{
					this.showToast("Usuário ou senha inválido!", 3000, "bottom");
				}

			},
			err => { this.showToast("Houve um erro inesperado!", 3000, "bottom"); }
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