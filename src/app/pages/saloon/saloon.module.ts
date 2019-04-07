import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaloonRoutingModule } from './saloon-routing.module';
import { SaloonComponent } from './saloon.component';
//for import the smart table
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [SaloonComponent],
  imports: [
    CommonModule,
    SaloonRoutingModule,
    Ng2SmartTableModule
  ]
})
export class SaloonModule { }
