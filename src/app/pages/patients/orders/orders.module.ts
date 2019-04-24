import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedComponent } from './orders/completed/completed.component';
import { ProcessingComponent } from './orders/processing/processing.component';

@NgModule({
  declarations: [CompletedComponent, ProcessingComponent],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
