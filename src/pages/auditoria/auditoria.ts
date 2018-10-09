import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the AuditoriaPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-auditoria',
  templateUrl: 'auditoria.html'
})
export class AuditoriaPage {

  summaryRoot = 'SummaryPage'
  checklistRoot = 'ChecklistPage'
  summaryAuditorRoot = 'SummaryAuditorPage'


  constructor(public navCtrl: NavController) {}

}
