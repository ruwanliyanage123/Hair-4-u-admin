import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';

//for import the smart table
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ProcessingComponent } from './processing/processing.component';
import { FinishedComponent } from './finished/finished.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [PatientsComponent, ProcessingComponent, FinishedComponent, OrdersComponent],
  imports: [CommonModule, PatientsRoutingModule, Ng2SmartTableModule]
})
export class PatientsModule {}
