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

  findAuditScore(audi_id, proc_id, ausc_accb_cucb_cucr_id):Observable<AuditScoreInterface>{
    return this.http.get(`${Utils.WERBSERVICE}/auditscore/findauditscore/ausc_audi_id/${audi_id}/ausc_accb_cucb_proc_id/${proc_id}/ausc_accb_cucb_cucr_id/${ausc_accb_cucb_cucr_id}`)
    .map( ( res: Response ) => res.json() );

  }

}
