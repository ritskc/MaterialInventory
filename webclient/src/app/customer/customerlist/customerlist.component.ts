import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { NgTemplateOutlet } from '@angular/common';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';


@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})

export class CustomerlistComponent implements AfterViewInit {
  public customers: Observable<Customer[]>= new Observable<Customer[]>();;
  displayColumns=['name','addressLine1','emailAddress','telephoneNumber','action'];
  
  dataSource = new MatTableDataSource<Customer>();
  

  @ViewChild(MatPaginator) paginator :any = MatPaginator;  
  @ViewChild(MatSort) sort:any =MatSort;

  
  constructor(private customerService:CustomerService,private _snackBar: MatSnackBar,private _liveAnnouncer: LiveAnnouncer) { 
    
  }
  ngAfterViewInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
    this.customers=this.customerService.getAll();    
    this.customers.subscribe(
      data=>{
        console.log(data);
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort=this.sort;
      },
      
      err => this._snackBar.open("Data loading issue", "",{        
        verticalPosition: 'bottom' ,
        panelClass: ['red-snackbar'],
        duration: 3000,       
      })
      );
  }
  /** Announce the change in sort state for assistive technology. */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  

}
