import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AuditCategoryProvider {

  constructor(public http: Http) {
    console.log('Hello AuditCategoryProvider Provider');
  }

}
