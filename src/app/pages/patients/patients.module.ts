import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';

//for import the smart table
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { FinishedComponent } from './finished/finished.component';

import { WigsModule } from './wigs/wigs.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [PatientsComponent, FinishedComponent, ProfileComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    Ng2SmartTableModule,
    WigsModule,
    MatFormFieldModule
  ]
})
export class PatientsModule {}
