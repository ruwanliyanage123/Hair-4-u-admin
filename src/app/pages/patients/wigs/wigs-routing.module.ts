import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WigsComponent } from './wigs.component';

const routes: Routes = [
  {
    path: '',
    component: WigsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WigsRoutingModule {}
