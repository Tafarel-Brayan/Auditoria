import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
              private storage: Storage
            ) {
    this.credentialsForm = this.formBuilder.group({
      usuario:['', Validators.required],
      senha:['', Validators.required],

    })
  }

  logar(){
    if(this.auth.login(this.credentialsForm.controls.usuario.value, this.credentialsForm.controls.senha.value)){
      this.storage.set('usuario', this.credentialsForm.controls.usuario.value);
      this.storage.set('senha', this.credentialsForm.controls.senha.value);
      this.navCtrl.setRoot(HomePage);
    }
    
  }

  /*ionViewDidLoad() {

  }*/

}
