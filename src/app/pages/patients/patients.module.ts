import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';

//for import the smart table
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { FinishedComponent } from './finished/finished.component';
import { WigsComponent } from './wigs/wigs.component';
import { CompletedComponent } from './wigs/completed/completed.component';
import { WaitingComponent } from './wigs/waiting/waiting.component';

@NgModule({
  declarations: [PatientsComponent, FinishedComponent, WigsComponent, CompletedComponent, WaitingComponent],
  imports: [CommonModule, PatientsRoutingModule, Ng2SmartTableModule]
})
export class PatientsModule {}
