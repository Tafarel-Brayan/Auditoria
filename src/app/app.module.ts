import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AuditoriaPageModule } from '../pages/auditoria/auditoria.module';
import { AuthProvider } from '../providers/auth/auth';
import { VwListAuditRespStatusProvider } from '../providers/vw-list-audit-resp-status/vw-list-audit-resp-status';
import { AuditoriaFormPage } from '../pages/auditoria-form/auditoria-form';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AuditoriaFormPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AuditoriaPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AuditoriaFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VwListAuditRespStatusProvider,
  ]
})
export class AppModule {}
