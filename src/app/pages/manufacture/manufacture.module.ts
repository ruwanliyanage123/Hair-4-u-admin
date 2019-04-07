import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufactureRoutingModule } from './manufacture-routing.module';
import { ManufactureComponent } from './manufacture.component';

//for import the smart table
import { Ng2SmartTableModule } from 'ng2-smart-table';
@NgModule({
  declarations: [ManufactureComponent],
  imports: [
    CommonModule,
    ManufactureRoutingModule,
    Ng2SmartTableModule
  ]
})
export class ManufactureModule { }
