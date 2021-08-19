import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiverpoolplayersPage } from './liverpoolplayers.page';

const routes: Routes = [
  {
    path: '',
    component: LiverpoolplayersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiverpoolplayersPageRoutingModule {}
