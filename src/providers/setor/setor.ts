import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Utils } from '../../pages/utils/utils';
import { SetorInterface } from './setor-interface';

@Injectable()
export class SetorProvider {

  constructor(public http: Http) {
  }

  findAll():Observable<SetorInterface[]>{
    return this.http.get(`${Utils.WERBSERVICE}/api/setor/status/1`)
    .map( (res:Response) => res.json() )

  }

}
