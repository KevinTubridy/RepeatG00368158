import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChelseaPage } from './chelsea.page';

const routes: Routes = [
  {
    path: '',
    component: ChelseaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChelseaPageRoutingModule {}
