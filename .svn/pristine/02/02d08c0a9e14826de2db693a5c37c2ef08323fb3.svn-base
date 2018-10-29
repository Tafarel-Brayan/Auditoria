import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Utils } from '../../pages/utils/utils';
import { EmpresaInterface } from './empresaInterface';

@Injectable()
export class EmpresaProvider {

  constructor(public http: Http) {
    //console.log('Hello EmpresaProvider Provider');
  }

  getEmpresa():Observable<EmpresaInterface[]>{
    return this.http.get(`${Utils.WERBSERVICE}/empresa/getEmpresa`)
    .map( ( res:Response ) => res.json() );
  }

}
