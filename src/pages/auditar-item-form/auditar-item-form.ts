import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

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

    _setor: SetorInterface;
    _setores: SetorInterface[];
    _auditScoreInterface:AuditScoreInterface;
    _owner: VwOwnerInterface;
    _owners: VwOwnerInterface[];
    _audi_id:number;
    _proc_id: number;
    _aucc_id:number;
    _formGroup: FormGroup;
    _score:boolean = false;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private vwOwnerProvider: VwOwnerProvider,
                private auditScoreProvider: AuditScoreProvider,
                private setorProvider: SetorProvider,
                private formBuilder: FormBuilder ,
                private toastCtrl: ToastController,
                private loadingCtrl: LoadingController) {

            this._formGroup = this.formBuilder.group({
                ausc_reference_document:['', Validators.required],
                ausc_remark:['', Validators.required],
                ausc_department:['', Validators.required],
                ausc_owner:['', Validators.required],
                ausc_action:['', Validators.required],
                ausc_score:[''],
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
        this._aucc_id = this.navParams.get('aucc_id');
        this._proc_id = this.navParams.get('proc_id');


        this.vwOwnerProvider.findAll().subscribe(
            data => this._owners = data
        );

        this.setorProvider.findAll()
        .subscribe(
            data => this._setores = data,
            err => console.log(err),
            () => {

                this.auditScoreProvider.findAuditScore(this._audi_id, this._proc_id, this._aucc_id)
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
                            
                            if(this._auditScoreInterface.department_name_digiboard != null && this._auditScoreInterface.department_name_digiboard != ''){
                                let z = this._setores.map(e => e.setor).indexOf(this._auditScoreInterface.department_name_digiboard);
                                
                                this._setor = this._setores[z];
                                //this._formGroup.controls['ausc_department'].setValue(this._setores[z].codigo);

                            }
        
                            for(let key in this._owners){
                                if(this._owners[key]['usua_id'] == this._auditScoreInterface.ausc_owner_digiboard){
                                    keyOwner = key;
                                }
                            }
                            this._owner = this._owners[keyOwner];
        
                            this._formGroup.controls['ausc_action'].setValue(this._auditScoreInterface.ausc_action_digiboard);
                            this._formGroup.controls['ausc_score'].setValue(this._auditScoreInterface.ausc_score_digiboard);
                            
                            
                            if(this._auditScoreInterface.ausc_score_digiboard == 1){
                                this._score = true;
                            }else{
                                this._score = false;
                            }

        
                        }else{
        
                            this._formGroup.controls['ausc_reference_document'].setValue(this._auditScoreInterface.ausc_reference_document_lenovo);
                            this._formGroup.controls['ausc_remark'].setValue(this._auditScoreInterface.ausc_remark_lenovo);

                            if(this._auditScoreInterface.department_name_lenovo != null && this._auditScoreInterface.department_name_lenovo != ''){
                                let z = this._setores.map(e => e.setor).indexOf(this._auditScoreInterface.department_name_lenovo);
                                //this._formGroup.controls['ausc_department'].setValue(this._setores[z].codigo);
                                this._setor = this._setores[z];
                            }

                            for(let key in this._owners){
                                if(this._owners[key]['usua_id'] == this._auditScoreInterface.ausc_owner_lenovo){
                                    keyOwner = key;
                                }
                            }
        
                            this._owner = this._owners[keyOwner];
                            this._formGroup.controls['ausc_action'].setValue(this._auditScoreInterface.ausc_action_lenovo);
                            this._formGroup.controls['ausc_score'].setValue(this._auditScoreInterface.ausc_score_lenovo);

                            if(this._auditScoreInterface.ausc_score_lenovo == 1){
                                this._score = true;
                            }else{
                                this._score = false;
                            }
        
                        }
                    }
                )
            }
        );

    }

    auditar(){

        const load = this.loadingCtrl.create({
            content: "Auditando..."
        })
        load.present();

        this.auditScoreProvider.putItem(this._formGroup.value, this._auditScoreInterface.ausc_id)
        .subscribe(

            data => '',
            err => {
                this.showToast("Algo deu errado, tente novamente!", 5000, "bottom");
                console.log(err);
            },
            () => {
                
                setTimeout(()=>{
                    load.dismiss();
                    this.showToast("Item auditado com sucesso", 3000, "bottom");
                    this.navCtrl.pop();
                }, 1500);

            }
        )
    }


    showLoader(){
        const loader = this.loadingCtrl.create({
            content: "Auditando.."
        })

        loader.present();

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
