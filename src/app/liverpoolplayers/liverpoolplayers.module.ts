import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiverpoolplayersPageRoutingModule } from './liverpoolplayers-routing.module';

import { LiverpoolplayersPage } from './liverpoolplayers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiverpoolplayersPageRoutingModule
  ],
  exports:[LiverpoolplayersPage],
  declarations: [LiverpoolplayersPage]
})
export class LiverpoolplayersPageModule {}
