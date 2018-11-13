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

    associarUserLenovo(audi_id, usua_id){
        return this.http.put(`${Utils.WERBSERVICE}/audit/associarUserLenovo/id/${audi_id}`, { usua_id:usua_id });
        // return this.http.put(`${Utils.WERBSERVICE}/auditscore/update/id/${id}`, form);
    }

    concluirAuditoria(judgement){

        return this.http.post(
            `${Utils.WERBSERVICE}/audit/concluirAuditoria`,
            judgement
        ).map( res => res.json() );
       
    }

}