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
		return this.storage.get('usua_id');
	}
	
	logout(){
		this.storage.remove("usua_id");
		this.storage.remove("usua_nome");
		this.storage.remove("usua_login");
		this.storage.remove("usua_cpf");
		this.storage.remove("usem_empr_id");
		this.storage.remove("usem_empr_nome");
	}
	
}
