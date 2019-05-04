import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WaitingModule } from './waiting/waiting.module';

import { WigsComponent } from './wigs.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { CompletedComponent } from './completed/completed.component';
import { WigsRoutingModule } from './wigs-routing.module';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  declarations: [WigsComponent, CompletedComponent],
  imports: [
    CommonModule,
    WaitingModule,
    MatDialogModule,
    MatFormFieldModule,
    WigsRoutingModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class WigsModule {}
