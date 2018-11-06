import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { Utils } from '../../pages/utils/utils';


@Injectable()
export class AuditProvider {

    constructor(public http: Http) { }

    cadastrar(form){
        return this.http.post(`${Utils.WERBSERVICE}/api/audit`, form);
    }

    concluirAuditoria(judgement){

        return this.http.post(
            `${Utils.WERBSERVICE}/audit/concluirAuditoria`,
            judgement
        ).map( res => res.json() );
       
    }

}