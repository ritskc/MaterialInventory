import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-customeradd',
  templateUrl: './customeradd.component.html',
  styleUrls: ['./customeradd.component.css']
})
export class CustomeraddComponent implements OnInit {
  customer:Customer;
  constructor(private customerService:CustomerService,private _snackBar: MatSnackBar) { 
    this.customer= new Customer();
  }

  ngOnInit(): void {
  }

  addNew(){
    
      this.customerService.addNew(this.customer).subscribe(
      data=>{console.log("data saved"); this._snackBar.open("data saved", "",{        
        verticalPosition: 'bottom' ,
        panelClass: ['red-snackbar'],
        duration: 3000,       
      })},
      
      err => this._snackBar.open("failed", "",{        
        verticalPosition: 'bottom' ,
        panelClass: ['red-snackbar'],
        duration: 3000,       
      })
      );
  }

}
