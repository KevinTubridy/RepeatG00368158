import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MancityPageRoutingModule } from './mancity-routing.module';

import { MancityPage } from './mancity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MancityPageRoutingModule
  ],
  declarations: [MancityPage]
})
export class MancityPageModule {}
