import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuditProvider } from '../../providers/audit/audit';
import { EmpresaInterface } from '../../providers/empresa/empresaInterface';
import { EmpresaProvider } from '../../providers/empresa/empresa';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
	selector: 'page-auditoria-form',
	templateUrl: 'auditoria-form.html',
})
export class AuditoriaFormPage {

	empresas: EmpresaInterface[];
	_audi_user_id_auditor_digiboard:string;

	formGroup: FormGroup;

	constructor(public navCtrl: NavController,
				public navParams: NavParams,
				private formBuilder: FormBuilder,
				private authService: AuthProvider,
				private empresaService: EmpresaProvider,
				private auditService:AuditProvider) {
		this.formGroup = this.formBuilder.group({
			audi_id:[],
			audi_comp_id:['', Validators.required],
			audi_mfg_surveyed:[],
			audi_mfg_address:[],
			audi_mfg_phone:[],
			audi_mfg_fax:[],
			audi_president_name:[],
			audi_president_phone:[],
			audi_president_email:[],
			audi_gm_name:[],
			audi_gm_phone:[],
			audi_gm_email:[],
			audi_qahead_name:[],
			audi_qahead_phone:[],
			audi_qahead_email:[],
			audi_productionhead_name:[],
			audi_productionhead_phone:[],
			audi_productionhead_email:[],
			audi_rdhead_name:[],
			audi_rdhead_phone:[],
			audi_rdhead_email:[],
			audi_saleshead_name:[],
			audi_saleshead_phone:[],
			audi_saleshead_email:[],
			audi_contactwindow1_name:[],
			audi_contactwindow1_phone:[],
			audi_contactwindow1_email:[],
			audi_contactwindow2_name:[],
			audi_contactwindow2_phone:[],
			audi_contactwindow2_email:[],
			audi_iso9001_rev:[],
			audi_iso9001_certifyingagency:[],
			audi_iso9001_date_plan:[],
			audi_iso14001_rev:[],
			audi_iso14001_certifyingagency:[],
			audi_iso14001_date_plan:[],
			audi_ohsas18001_rev:[],
			audi_ohsas18001_certifyingagency:[],
			audi_ohsas18001_date_plan:[],
			audi_sa8000_rev:[],
			audi_sa8000_certifyingagency:[],
			audi_sa8000_date_plan:[],
			audi_others_rev:[],
			audi_others_certifyingagency:[],
			audi_others_date_plan:[],
			audi_date_company_established:[],
			audi_date_operation_began:[],
			audi_number_employees:[],
			audi_shift:[],
			audi_maximum_capacity:[],
			audi_current_capacity_utilization:[],
			audi_customer1:[],
			audi_customer2:[],
			audi_customer3:[],
			audi_expansion_plan:[],
			audi_employee_turnover:[],
			audi_user_id_auditor_lenovo:[],
			audi_user_id_auditor_digiboard:[],
			audi_outstanding:[],
			audi_outstanding_justification:[],
			audi_approved:[],
			audi_approved_justification:[],
			audi_conditionally_approved:[],
			audi_conditionally_approved_justification:[],
			audi_not_approved:[],
			audi_not_approved_justification:[],
			audi_date:[],
			audi_supplier:[],
			audi_factory_location:[],
			audi_comments:[],
			audi_report_date:[],
			audi_user_id_authorizedby:[],
			audi_remark:[],
			audi_status_lenovo:[],
			audi_status_digiboard: [],
		})
	}

	cadastrar(){

		this.formGroup.value.audi_user_id_auditor_digiboard = this._audi_user_id_auditor_digiboard;
		this.auditService.cadastrar(this.formGroup.value)
		.subscribe(data => {
			this.navCtrl.push(HomePage);
		});
	}

	ionViewDidLoad() {

		this.empresaService.getEmpresa()
		.subscribe( data => this.empresas = data );

		this._audi_user_id_auditor_digiboard = sessionStorage.getItem('usua_id');

	}

	ionViewCanEnter(){
		if(this.authService.isLogged() === null ){
			this.navCtrl.setRoot(LoginPage);
		}
	}

}
