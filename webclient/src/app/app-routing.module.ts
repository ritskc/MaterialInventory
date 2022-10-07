import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerlistComponent } from './customer/customerlist/customerlist.component';
import { SupplierlistComponent } from './supplier/supplierlist/supplierlist.component';
import { SupplierComponent } from './supplier/supplier/supplier.component';

const routes: Routes = [
  {path : 'supplier/supplierlist' , component: SupplierlistComponent},
  {path : 'Customer' , component: CustomerlistComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
