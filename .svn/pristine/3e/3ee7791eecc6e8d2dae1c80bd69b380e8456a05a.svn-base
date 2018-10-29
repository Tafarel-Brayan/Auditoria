import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { AuditoriaFormPage } from '../pages/auditoria-form/auditoria-form';
import { LoginPage } from '../pages/login/login';
import { LoginService } from '../pages/login/login.service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  nomeUser: string;
  nomeEmpresa: string;
  constructor(public platform: Platform, 
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public authProvider: AuthProvider,
              private loginService: LoginService

            ) {
    this.initializeApp();
         
    this.nomeUser = sessionStorage.getItem('usua_nome') !== null ? sessionStorage.getItem('usua_nome') : this.nomeUser
    this.nomeEmpresa = sessionStorage.getItem('usem_empr_nome') !== null ? sessionStorage.getItem('usem_empr_nome') : this.nomeEmpresa
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', component: HomePage, icon: 'home' },
      { title: 'Cadastrar', component: AuditoriaFormPage, icon: 'md-add-circle' },
    ];

    

  }

  initializeApp() {
    
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.loginService.notifier.subscribe( 
       retorno => {
         this.nomeUser = retorno.name;
         this.nomeEmpresa = retorno.empresa
       }
     )
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){
    this.authProvider.logout();
    this.nav.setRoot(LoginPage);
  }
}
