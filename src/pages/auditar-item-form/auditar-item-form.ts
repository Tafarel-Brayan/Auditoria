import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectSearchableComponent } from 'ionic-select-searchable';


@IonicPage()
@Component({
    selector: 'page-auditar-item-form',
    templateUrl: 'auditar-item-form.html',
})
export class AuditarItemFormPage {
    
       
    @ViewChild('myselect') selectComponent:SelectSearchableComponent;
    user = null;
    userIds = [];

    users

    constructor(public navCtrl: NavController, public navParams: NavParams) {
       this.users = [
        { id: 1, name: 'Tokai' },
        { id: 2, name: 'Vladivostok' },
        { id: 3, name: 'Navlakhi' }
       ]
    }
    
    userChanged(event: { component: SelectSearchableComponent, value: any}){
        console.log('event', event);
    }

    onClose(){
        console.log("thanks for your selection");
    }

    openFromCode(){
        this.selectComponent.open();
    }
       
    ionViewDidLoad() {
        console.log('ionViewDidLoad AuditarItemFormPage');
    }
    
}
