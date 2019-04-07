import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { SchedulerComponent } from './scheduler.component';
import { SchedulerRoutingModule } from './scheduler-routing.module';

@NgModule({
  declarations: [SchedulerComponent],
  imports: [
    CommonModule,
    ScheduleModule,
    SchedulerRoutingModule
  ]
})
export class SchedulerModule { }
