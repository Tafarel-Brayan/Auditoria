import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Utils } from '../../pages/utils/utils';
import { AuditProcessInterface } from './audit-process-interface';
import { SummaryInterface } from '../../pages/summary/summary-interface';

@Injectable()
export class AuditProcessProvider {

  constructor(public http: Http) {
  }

  getProcess(audi_id):Observable<AuditProcessInterface[]>{
    return this.http.get(`${Utils.WERBSERVICE}/auditprocess/GetProcessAudit/audit/${audi_id}`)
    .map( ( res:Response ) => res.json() );
  }

  getSummaryTable1(audi_id, empresa):Observable<any[]>{
    return this.http.get(`${Utils.WERBSERVICE}/auditprocess/SummaryTb1/audi_id/${audi_id}/empresa/${empresa}`)
    .map( (res:Response) => res.json() );
  }

  getSummaryTable2(audi_id, empresa):Observable<SummaryInterface[]>{
    return this.http.get(`${Utils.WERBSERVICE}/auditprocess/summary/audi_id/${audi_id}/empresa/${empresa}`)
    .map( (res:Response) => res.json() );
  }

}
