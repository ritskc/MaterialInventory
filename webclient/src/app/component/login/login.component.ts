import { Component, OnInit } from '@angular/core';
import { LoginserviceService  } from 'src/app/service/loginservice.service';
import { LoginModel } from 'src/app/model/login.model';
import { Observable } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public login$:Observable<LoginModel>;
public loginString:string;
email = new FormControl('', [Validators.required, Validators.email]);
hide = true; 

  constructor(private loginService:LoginserviceService,private _snackBar: MatSnackBar) {
    
    this.login$ = new Observable<LoginModel>();
    this.loginString="";
  }
  
  ngOnInit(): void {    
   
  }

 
  doLogin(userName: string,password:string) {
   
    if (userName&&password) {
      this.login$=this.loginService.authenticate(userName,password);    
    this.login$.subscribe(
      data=>this._snackBar.open("Success" ,"", {
        duration: 3000,
        verticalPosition:"bottom"       
      }),
      err => this._snackBar.open("Invalid username/password", "",{        
        verticalPosition: 'bottom' ,
        panelClass: ['red-snackbar'],
        duration: 3000,       
      })
      );
    }
  }

}
