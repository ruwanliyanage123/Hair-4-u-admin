import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailsComponent } from './emails.component';
import { EmailsRoutingModule } from './emails-routing.module';

@NgModule({
  declarations: [EmailsComponent],
  imports: [CommonModule, EmailsRoutingModule]
})
export class EmailsModule {}
