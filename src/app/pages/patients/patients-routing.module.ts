import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientsComponent } from './patients.component';
import { FinishedComponent } from './finished/finished.component';
import { PatientOrderComponent } from './patient-order/patient-order.component';

const routes: Routes = [
  {
    path: '',
    component: PatientsComponent,
    children: [
      {
        path: 'order',
        component: PatientOrderComponent
      },
      {
        path: 'finished',
        component: FinishedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule {}
