import { Component, OnInit } from '@angular/core';
import { LoginserviceService  } from 'src/app/service/loginservice.service';
import { LoginModel } from 'src/app/model/login.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public login$:Observable<LoginModel>;

  constructor(private loginService:LoginserviceService) { 
    this.login$ = new Observable<LoginModel>();
  }
  
  ngOnInit(): void {    
   
  }

  onClickMe() {
    alert('a');
  }

  doLogin(userName: string,password:string) {
    if (userName&&password) {
    this.login$=this.loginService.authenticate(userName,password);    
    this.login$.subscribe(data=>alert(data.token));
    }
  }

}
