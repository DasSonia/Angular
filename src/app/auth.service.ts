import { Http,Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
  currentUser: any; 

  constructor(private http:Http) { }
  login(credentials){

  let body = JSON.stringify(credentials);
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  return this.http.post('http://localhost:8081/auth-jwt/', body, options)
                .map(response=>{
                  let result = response.json();
      
                  if (result && result.token) {
                    localStorage.setItem('token', result.token);                                        
                    return true; 
                  }
                  else return false; 
                })
  }

  logout(){
    localStorage.removeItem('token');
  }

  iSloggedin(){
    return false;
  }

}
