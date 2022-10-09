import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { NgTemplateOutlet } from '@angular/common';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})

export class CustomerlistComponent implements AfterViewInit {
  public customers: Observable<Customer[]>= new Observable<Customer[]>();;
  displayColumns=['name','addressLine1','emailAddress','telephoneNumber'];
  
  dataSource = new MatTableDataSource<Observable<Customer[]>>();
  

  @ViewChild(MatPaginator) paginator :any = MatPaginator;
  
  
  constructor(private customerService:CustomerService,private _snackBar: MatSnackBar) { 
    
  }
  ngAfterViewInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
    this.customers=this.customerService.getAll();    
    this.customers.subscribe(
      data=>{console.log(data);},
      
      err => this._snackBar.open("Data loading issue", "",{        
        verticalPosition: 'bottom' ,
        panelClass: ['red-snackbar'],
        duration: 3000,       
      })
      );
  }

}
