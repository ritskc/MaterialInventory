import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  userName = "";
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  constructor() { 
     
  }

  ngOnInit(): void {
    const nameDetail = localStorage.getItem("username");
    if (nameDetail) {
      this.userName = nameDetail;      
    }

  }

}
