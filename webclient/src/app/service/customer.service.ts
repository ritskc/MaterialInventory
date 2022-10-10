import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    

  constructor(private http:HttpClient) { }

  getAll(){       
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE2NjUyNDMxMDIsImV4cCI6MTY2NTg0NzkwMiwiaWF0IjoxNjY1MjQzMTAyfQ.5DCMu_I5zJIKBp6xcQKcRVhtzuZbboU0Oj3XH9rPC2Y'
      })
    };

    return this.http.get<Customer[]>('https://localhost:44390/customers/1',httpOptions);  
}

addNew (customer:Customer)
  {   
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'       
      })
    };
    return this.http.post<any>('https://localhost:44390/customers',customer,httpOptions);  
    
  }
}
