import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SelectSearchableModule } from 'ionic-select-searchable';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeaderColor } from '@ionic-native/header-color';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


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
import { AuditScoreProvider } from '../providers/audit-score/audit-score';
import { AuditarItemFormPage } from '../pages/auditar-item-form/auditar-item-form';
import { VwOwnerProvider } from '../providers/vw-owner/vw-owner';
import { VwAuditScoreProvider } from '../providers/vw-audit-score/vw-audit-score';
import { SetorProvider } from '../providers/setor/setor';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AuditoriaFormPage,
    ItensChecklistPage,
    AuditarItemFormPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AuditoriaPageModule,
    SelectSearchableModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AuditoriaFormPage,
    ItensChecklistPage,
    AuditarItemFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HeaderColor,
    AuthProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VwListAuditRespStatusProvider,
    AuditProvider,
    EmpresaProvider,
    LoginService,
    AuditProcessProvider,
    AuditCustomerCriteriaBondProvider,
    AuditCategoryProvider,
    AuditCustomerCriteriaProvider,
    AuditScoreProvider,
    VwOwnerProvider,
    VwAuditScoreProvider,
    SetorProvider

  ]
})
export class AppModule {}
