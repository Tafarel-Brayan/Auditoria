import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Utils } from './../../pages/utils/utils';
import { VwOwnerInterface } from './vw-owner-interface';

@Injectable()
export class VwOwnerProvider {

    constructor(public http: Http) {

    }

    findAll():Observable<VwOwnerInterface[]>{
        return this.http.get(`${Utils.WERBSERVICE}/api/VwOwner`)
        .map( ( res: Response ) => res.json() );
    }

}
