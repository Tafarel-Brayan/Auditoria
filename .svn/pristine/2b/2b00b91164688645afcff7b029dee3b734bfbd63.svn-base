import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectSearchableComponent } from 'ionic-select-searchable';

import { VwOwnerProvider } from './../../providers/vw-owner/vw-owner';
import { VwOwnerInterface } from './../../providers/vw-owner/vw-owner-interface';
import { AuditScoreProvider } from './../../providers/audit-score/audit-score';
import { AuditScoreInterface } from './../../providers/audit-score/audit-score-interface';


@IonicPage()
@Component({
    selector: 'page-auditar-item-form',
    templateUrl: 'auditar-item-form.html',
})
export class AuditarItemFormPage {
    
       
    @ViewChild('myselect') selectComponent:SelectSearchableComponent;

    _auditScoreInterface:AuditScoreInterface;
    _owner: VwOwnerInterface;
    _owners: VwOwnerInterface[];
    _audi_id:number;
    _proc_id: number;
    _cucr_id:number;
    _formGroup: FormGroup;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private vwOwnerProvider: VwOwnerProvider,
                private auditScoreProvider: AuditScoreProvider,
                private formBuilder: FormBuilder ) {

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
                    this._formGroup.controls['ausc_department'].setValue(this._auditScoreInterface.ausc_department_digiboard);
                    //this._formGroup.controls['ausc_owner'].setValue(1);

                    for(let key in this._owners){
                        if(this._owners[key]['usua_id'] == this._auditScoreInterface.ausc_owner_digiboard_id){
                            keyOwner = key;
                        }
                    }
                    this._owner = this._owners[keyOwner];

                    this._formGroup.controls['ausc_action'].setValue(this._auditScoreInterface.ausc_action_digiboard);
                    this._formGroup.controls['ausc_score'].setValue(this._auditScoreInterface.ausc_score_digiboard);

                }else{

                    this._formGroup.controls['ausc_reference_document'].setValue(this._auditScoreInterface.ausc_reference_document_lenovo);
                    this._formGroup.controls['ausc_remark'].setValue(this._auditScoreInterface.ausc_remark_lenovo);
                    this._formGroup.controls['ausc_department'].setValue(this._auditScoreInterface.ausc_department_lenovo);
                    
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

    auditar(){

    }
    
}
