import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';

//for import the smart table
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { PatientOrderComponent } from './patient-order/patient-order.component';
import { FinishedComponent } from './finished/finished.component';

@NgModule({
  declarations: [PatientsComponent, FinishedComponent, PatientOrderComponent],
  imports: [CommonModule, PatientsRoutingModule, Ng2SmartTableModule]
})
export class PatientsModule {}
