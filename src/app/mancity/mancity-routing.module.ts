import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MancityPage } from './mancity.page';

const routes: Routes = [
  {
    path: '',
    component: MancityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MancityPageRoutingModule {}
