import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {

  constructor(private http:Http) { }

  getStatus(){
    return this.http.get('/account/check')
            .map(res => res.json());
  }
  login(email:string, password:string){
  	var headers = new Headers();
    headers.append('Content-Type', 'application/json');
  	return this.http.post('/account/login', JSON.stringify({email:email,password:password}), {headers: headers})
            .map(res => res.json());
  }
  signup(email:string, password:string){
  	var headers = new Headers();
    headers.append('Content-Type', 'application/json');

  	return this.http.post('/account/signup', JSON.stringify({email:email,password:password}), {headers: headers})
            .map(res => res.json());
  }
  logout(){
    console.log('going to send logout request');
    return this.http.get('/account/logout')
            .map(res => res.json());
  }
}
