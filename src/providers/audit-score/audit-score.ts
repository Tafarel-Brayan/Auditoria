import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Utils } from './../../pages/utils/utils';
import { AuditScoreInterface } from './audit-score-interface';

@Injectable()
export class AuditScoreProvider {

  constructor(public http: Http) {
  }

  findAuditScore(audi_id, proc_id, aucc_id):Observable<AuditScoreInterface>{
    return this.http.get(`${Utils.WERBSERVICE}/auditscore/findauditscore/audi_id/${audi_id}/aupr_id/${proc_id}/aucc_id/${aucc_id}`)
    .map( ( res: Response ) => res.json() );
  }

  getTotal(audi_id, empresa):Observable<any>{
    return this.http.get(`${Utils.WERBSERVICE}/auditscore/gettotal/audi_id/${audi_id}/empresa/${empresa}`)
    .map( (res:Response) => res.json() );
  }

  putItem(form, id){
    return this.http.put(`${Utils.WERBSERVICE}/auditscore/update/id/${id}`, form);
  }

  resultScore(audi_id, empresa):Observable<string>{
    return this.http.get(`${Utils.WERBSERVICE}/auditscore/GetResultScoreFromAudit/audi_id/${audi_id}/empresa/${empresa}`)
    .map( (res:Response ) => res.json() );
  }


}