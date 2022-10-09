import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from 'src/app/model/supplier';
import { SupplierService } from 'src/app/service/supplier.service';
import { FormControl, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { NgTemplateOutlet } from '@angular/common';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-supplierlist',
  templateUrl: './supplierlist.component.html',
  styleUrls: ['./supplierlist.component.css']
})
export class SupplierlistComponent implements AfterViewInit {
  public suppliers: Observable<Supplier[]>= new Observable<Supplier[]>();;
  displayColumns=['id','companyId','name','contactPersonName'];
  dataSource = new MatTableDataSource<Observable<Supplier[]>>();
  constructor(private supplierService:SupplierService,private _snackBar: MatSnackBar) { 
   
  }
  ngAfterViewInit(): void {
    this.suppliers=this.supplierService.getAll();    
    this.suppliers.subscribe(
      data=>{console.log(data);},
      
      err => this._snackBar.open("Data loading issue", "",{        
        verticalPosition: 'bottom' ,
        panelClass: ['red-snackbar'],
        duration: 3000,       
      })
      );
  }

  OnAfterViewInit(): void {
    
    
      
  }

  

}
