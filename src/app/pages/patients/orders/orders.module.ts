import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedComponent } from './orders/completed/completed.component';

@NgModule({
  declarations: [CompletedComponent],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
