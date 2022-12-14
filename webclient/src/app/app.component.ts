import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  
  showLogin = true;
  showMain = false;
 

  OnLoginSuccess(){    
    this.toggle();
  }

  toggle() {
    this.showLogin = false;
    this.showMain = true;  
}
}
