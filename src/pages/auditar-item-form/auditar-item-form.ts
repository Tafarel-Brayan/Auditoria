import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectSearchableComponent } from 'ionic-select-searchable';

import { VwOwnerProvider } from './../../providers/vw-owner/vw-owner';
import { VwOwnerInterface } from './../../providers/vw-owner/vw-owner-interface';
import { AuditScoreProvider } from './../../providers/audit-score/audit-score';
import { AuditScoreInterface } from './../../providers/audit-score/audit-score-interface';
import { SetorInterface } from '../../providers/setor/setor-interface';
import { SetorProvider } from '../../providers/setor/setor';

import 'rxjs/add/operator/map';

@IonicPage()
@Component({
    selector: 'page-auditar-item-form',
    templateUrl: 'auditar-item-form.html',
})
export class AuditarItemFormPage {
    
       
    @ViewChild('myselect') selectComponent:SelectSearchableComponent;

    _setores: SetorInterface[];
    _auditScoreInterface:AuditScoreInterface;
    _owner: VwOwnerInterface;
    _owners: VwOwnerInterface[];
    _audi_id:number;
    _proc_id: number;
    _cucr_id:number;
    _formGroup: FormGroup;
    _score:boolean = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private vwOwnerProvider: VwOwnerProvider,
                private auditScoreProvider: AuditScoreProvider,
                private setorProvider: SetorProvider,
                private formBuilder: FormBuilder ,
                private toastCtrl: ToastController) {

            this._formGroup = this.formBuilder.group({
                ausc_reference_document:['', Validators.required],
                ausc_remark:['', Validators.required],
                ausc_department:['', Validators.required],
                ausc_owner:['', Validators.required],
                ausc_action:['', Validators.required],
                ausc_score:['', Validators.required],
                empresa:[sessionStorage.getItem('usem_empr_id')]
            });

    }
    
    ownerChanged(event: { component: SelectSearchableComponent, value: any}){
        console.log('event', event);
    }

    openFromCode(){
        this.selectComponent.open();
    }
       
    ionViewDidEnter() {

        this._audi_id = this.navParams.get('audi_id');
        this._cucr_id = this.navParams.get('aucc_cucr_id');
        this._proc_id = this.navParams.get('proc_id');


        this.vwOwnerProvider.findAll().subscribe(
            data => this._owners = data
        );

        this.setorProvider.findAll()
        .subscribe(
            data => this._setores = data,
            err => console.log(err),
            () => {

                this.auditScoreProvider.findAuditScore(this._audi_id, this._proc_id, this._cucr_id)
                .subscribe(
                    data => {
                        this._auditScoreInterface = data;
                    },
                    err => console.log(err),
                    () => {
                        let keyOwner;
                        let empresa = sessionStorage.getItem('usem_empr_id');
                        if( empresa == "1"){
        
                            this._formGroup.controls['ausc_reference_document'].setValue(this._auditScoreInterface.ausc_reference_document_digiboard);
                            this._formGroup.controls['ausc_remark'].setValue(this._auditScoreInterface.ausc_remark_digiboard);
                            
                            if(this._auditScoreInterface.ausc_department_digiboard != null && this._auditScoreInterface.ausc_department_digiboard != ''){
                                let z = this._setores.map(e => e.setor).indexOf(this._auditScoreInterface.ausc_department_digiboard);
                                this._formGroup.controls['ausc_department'].setValue(this._setores[z].codigo);
                            }
        
                            for(let key in this._owners){
                                if(this._owners[key]['usua_id'] == this._auditScoreInterface.ausc_owner_digiboard_id){
                                    keyOwner = key;
                                }
                            }
                            this._owner = this._owners[keyOwner];
        
                            this._formGroup.controls['ausc_action'].setValue(this._auditScoreInterface.ausc_action_digiboard);
                            this._formGroup.controls['ausc_score'].setValue(this._auditScoreInterface.ausc_score_digiboard);
                            
                            console.log(this._auditScoreInterface.ausc_score_digiboard);
                            if(this._auditScoreInterface.ausc_score_digiboard == 1){
                                console.log("true");
                                this._score = true;
                            }else{
                                console.log("false");
                                this._score = false;
                            }

        
                        }else{
        
                            this._formGroup.controls['ausc_reference_document'].setValue(this._auditScoreInterface.ausc_reference_document_lenovo);
                            this._formGroup.controls['ausc_remark'].setValue(this._auditScoreInterface.ausc_remark_lenovo);

                            if(this._auditScoreInterface.ausc_department_lenovo != null && this._auditScoreInterface.ausc_department_lenovo != ''){
                                let z = this._setores.map(e => e.setor).indexOf(this._auditScoreInterface.ausc_department_lenovo);
                                this._formGroup.controls['ausc_department'].setValue(this._setores[z].codigo);
                            }

                            for(let key in this._owners){
                                if(this._owners[key]['usua_id'] == this._auditScoreInterface.ausc_owner_lenovo_id){
                                    keyOwner = key;
                                }
                            }
        
                            this._owner = this._owners[keyOwner];
                            this._formGroup.controls['ausc_action'].setValue(this._auditScoreInterface.ausc_action_lenovo);
                            this._formGroup.controls['ausc_score'].setValue(this._auditScoreInterface.ausc_score_lenovo);
        
                        }
                    }
                )
            }
        );

    }

    auditar(){
        this.auditScoreProvider.putItem(this._formGroup.value, this._auditScoreInterface.ausc_id)
        .subscribe(
            data => console.log(data),
            err => {
                this.showToast("Algo deu errado, tente novamente!", 3000, "bottom");
            },
            () => {
                this.showToast("Auditado Com Sucesso", 3000, "bottom");
                setTimeout(() => {
                    this.navCtrl.pop();
                }, 3000);
            }
        )
    }


    showToast(m, d, p){
        let toast = this.toastCtrl.create({
            message:  m,
            duration: d,
            position: p
        });

        toast.present();
    }
}
