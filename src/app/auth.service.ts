import { Http,Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthService {

  constructor(private http:Http) { }
  login(credentials){

  let body = JSON.stringify(credentials);
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http.post('http://localhost:8080/auth-jwt/', body, options)
                .map(response=>{
                  console.log(response.json())
                })
  }

  logout(){

  }

  iSloggedin(){
    return false;
  }

}
