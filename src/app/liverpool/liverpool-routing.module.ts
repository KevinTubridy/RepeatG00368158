import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiverpoolPage } from './liverpool.page';

const routes: Routes = [
  {
    path: '',
    component: LiverpoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiverpoolPageRoutingModule {}
