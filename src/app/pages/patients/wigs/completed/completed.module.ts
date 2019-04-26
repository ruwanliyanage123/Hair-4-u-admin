import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedComponent } from './completed.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [CompletedComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [CompletedComponent]
})
export class CompletedModule {}
