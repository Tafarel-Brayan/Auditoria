import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Utils } from '../../pages/utils/utils';
import { LoginInterface } from '../../pages/login/loginInterface';

@Injectable()
export class AuthProvider {
	
	constructor(public storage: Storage, private http: Http) {
	}
	
	login(user, password):Observable<LoginInterface> {
		return this.http.get(`${Utils.WERBSERVICE}/acesso/login/login/${user}/senha/${password}`)
		.map( (res:Response) => res.json());
	}
	
	isLogged(){
		return sessionStorage.getItem('usua_id');
	}
	
	logout(){
		sessionStorage.removeItem('usua_id')
	}
	
}
