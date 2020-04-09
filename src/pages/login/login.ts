import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, MenuController } from 'ionic-angular';
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
				 public loginService: LoginService,
				 public loadingCtrl : LoadingController,
				 public menu: MenuController
				 ) {

		this.credentialsForm = this.formBuilder.group({
			usuario:['', Validators.required],
			senha:['', Validators.required],
		});

		this.menu.enable(false);
		

	}

	logar(){

		const load = this.loadingCtrl.create({
            content: "This process may take a few minutes!"
        })
        load.present();
		
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
					this.menu.enable(true);
					this.navCtrl.setRoot(HomePage);

				}else{
					this.showToast("Invalid User or Password", 3000, "bottom");
				}

			},
			err => {
				load.dismiss();
				this.showToast("You are not connected to a wifi network", 3000, "bottom");
			},
			() => {
                
                setTimeout(()=>{
                    load.dismiss();
                    this.showToast("Welcome to system", 3000, "bottom");
                }, 500);

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