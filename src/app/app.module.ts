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
import { AuditProvider } from '../providers/audit/audit';
import { EmpresaProvider } from '../providers/empresa/empresa';
import { LoginService } from '../pages/login/login.service';
import { AuditProcessProvider } from '../providers/audit-process/audit-process';
import { ItensChecklistPage } from '../pages/itens-checklist/itens-checklist';
import { AuditCustomerCriteriaBondProvider } from '../providers/audit-customer-criteria-bond/audit-customer-criteria-bond';
import { AuditCategoryProvider } from '../providers/audit-category/audit-category';
import { AuditCustomerCriteriaProvider } from '../providers/audit-customer-criteria/audit-customer-criteria';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AuditoriaFormPage,
    ItensChecklistPage
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
    AuditoriaFormPage,
    ItensChecklistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VwListAuditRespStatusProvider,
    AuditProvider,
    EmpresaProvider,
    LoginService,
    AuditProcessProvider,
    AuditCustomerCriteriaBondProvider,
    AuditCategoryProvider,
    AuditCustomerCriteriaProvider

  ]
})
export class AppModule {}
