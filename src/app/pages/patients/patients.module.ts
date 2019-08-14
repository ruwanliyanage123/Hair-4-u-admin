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
import {
  MatDialogModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [PatientsComponent, FinishedComponent, ProfileComponent, EmailComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    Ng2SmartTableModule,
    WigsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  entryComponents: [ProfileComponent]
})
export class PatientsModule {}
