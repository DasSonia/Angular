import { Http,Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired} from 'angular2-jwt'


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

  isloggedin(){
    // npm install angular2-jwt --save
    return tokenNotExpired();
    /*
    let jwtHelper = new JwtHelper();
    let token = localStorage.getItem('token');

    if(!token)
      return false;
      
    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);
    console.log("Expiration",expirationDate);
    console.log("isExpired",isExpired);
    return !isExpired;
    */
  }

}
