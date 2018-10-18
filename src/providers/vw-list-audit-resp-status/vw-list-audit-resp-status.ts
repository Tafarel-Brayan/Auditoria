import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { HomeInterface } from '../../pages/home/homeInterface';
import { Utils } from '../../pages/utils/utils';

@Injectable()
export class VwListAuditRespStatusProvider {

  constructor(public http: Http) {
  }

  findAll():Observable<HomeInterface[]>{
    return this.http.get(`${Utils.WERBSERVICE}/api/VwListAuditRespStatus`)
    .map( (res:Response) => res.json() )
  }

}
