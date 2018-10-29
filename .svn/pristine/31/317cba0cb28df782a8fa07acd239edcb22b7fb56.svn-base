import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Utils } from '../../pages/utils/utils';
import { CategoryCriteriaInterface } from './category-criteria-interface';


@Injectable()
export class AuditCustomerCriteriaBondProvider {
	
	constructor(public http: Http) {
	}
	
	getCategoryItemByAudit(audi_id, proc_id):Observable<CategoryCriteriaInterface[]>{
		return this.http.get(`${Utils.WERBSERVICE}/AuditCustomerCriteriaBond/GetCategoryItemByAudit/audi_id/${audi_id}/proc_id/${proc_id}`)
		.map( ( res:Response ) => res.json());
	}
	
	
}
