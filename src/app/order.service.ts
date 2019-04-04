import { Injectable } from '@angular/core';
import { http } from 'angular2-jwt';
import { RequestOptions,Http, Headers } from '@angular/http';

@Injectable()
export class OrderService {

  
  constructor(private http: Http) {
  }

  getOrders() { 
    let headers = new Headers();
    let token = localStorage.getItem('token');
    headers.append('Authorization','Bearer '+token);

    let options = new RequestOptions({headers:headers});
    return this.http.get('http://localhost:8081/api/feeds/',options)
      .map(response => response.json());
  }

}
