import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Utils } from '../../pages/utils/utils';

@Injectable()
export class AuthProvider {

  constructor(public storage: Storage, private http: Http) {
  }

  login(user, password):Observable<{}> {

    return this.http.get(`${Utils.WERBSERVICE}/usuario/1`)
    .map( (res:Response) => res.json() );

    

    // if(user == 'admin' && password == 'admin'){
    //   return true;
    // }else{
    //   return false;
    // }
  }

  isLogged(){
    
    return true;

    // return this.storage.get('usuario').then(
    //   (val) => {
    //     if(val){
    //       return true;
    //     }else{
    //       return false;
    //     }
    //   }
    // );

  }

  logout(){
    
  }

}
