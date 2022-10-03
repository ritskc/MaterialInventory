import { Injectable } from '@angular/core';
import {HttpClient,HttpContextToken,HttpHeaders } from '@angular/common/http'
import { LoginModel } from '../model/login.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
public login: LoginModel;

  constructor(private http:HttpClient) { 
    this.login = new LoginModel();
  }

  authenticate(userName:string,password:string)
  {
    this.login.userName=userName;
    this.login.password=password;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'       
      })
    };
    return this.http.post<LoginModel>('https://questapi.yellow-chips.com//users/authenticate',this.login,httpOptions);  
  }
  
}
