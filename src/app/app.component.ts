import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeaderColor } from '@ionic-native/header-color';
import { Network } from '@ionic-native/network';

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
    loaderWifi = this.loadingCtrl.create({
        content: "Connect to wifi network..."
    });

    constructor(private headerColor:HeaderColor,
                public platform: Platform, 
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                public authProvider: AuthProvider,
                private loginService: LoginService,
                private network:Network,
                public toastCtrl: ToastController,
                public loadingCtrl: LoadingController ) {
            
        this.initializeApp();
        
        this.nomeUser = sessionStorage.getItem('usua_nome') !== null ? sessionStorage.getItem('usua_nome') : this.nomeUser
        this.nomeEmpresa = sessionStorage.getItem('usem_empr_nome') !== null ? sessionStorage.getItem('usem_empr_nome') : this.nomeEmpresa

        this.network.onConnect()
			.subscribe(
				() => {
                    setTimeout(() => {
                        if (this.network.type === this.network.Connection.WIFI) {
                            this.toastCtrl.create({
                                message: 'Network Wifi connected',
                                duration: 3000
                            }).present();
                            this.loaderWifi.dismiss();
                        }
                    }, 1000);
				}
			);

		this.network.onDisconnect()
			.subscribe(
				() => {
                    if (this.network.type !== this.network.Connection.WIFI) {
                        setTimeout(() => {
                            this.showLoaderWifi();
                        }, 1000);
                    }
                    // if (this.network.type === this.network.Connection.CELL_4G || this.network.type === this.network.Connection.NONE) {
                    //     setTimeout(() => {
                    //         this.showLoaderWifi();
                    //     }, 1000);
                    // }
				}
			);
        
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: HomePage, icon: 'home' },
            { title: 'Register Audit', component: AuditoriaFormPage, icon: 'md-add-circle' },
        ];

    }
    
    initializeApp() {


        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // this.statusBar.styleDefault();
            this.statusBar.backgroundColorByHexString("#169079");
            this.splashScreen.hide();
            this.headerColor.tint("#16A086");

        });

        this.loginService.notifier.subscribe(

            retorno => {

                this.nomeUser = retorno.name;
                this.nomeEmpresa = retorno.empresa

                if(retorno.usem_empr_id == '1'){

                    this.pages = [
                        { title: 'Home', component: HomePage, icon: 'home' },
                        { title: 'Register Audit', component: AuditoriaFormPage, icon: 'md-add-circle' },
                    ];

                }else{

                    this.pages = [
                        { title: 'Home', component: HomePage, icon: 'home' },
                        // { title: 'Register Audit', component: AuditoriaFormPage, icon: 'md-add-circle' },
                    ];

                }

            }
        )

    }

    showLoaderWifi(){
        this.loaderWifi = this.loadingCtrl.create({
            content: "Connect to wifi network..."
        });
        this.loaderWifi.present();
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
    
    logout(){
        this.nav.setRoot(LoginPage);
        this.authProvider.logout();
    }
}