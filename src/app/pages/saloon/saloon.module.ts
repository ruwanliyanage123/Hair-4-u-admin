import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaloonRoutingModule } from './saloon-routing.module';
import { SaloonComponent } from './saloon.component';

@NgModule({
  declarations: [SaloonComponent],
  imports: [
    CommonModule,
    SaloonRoutingModule
  ]
})
export class SaloonModule { }
