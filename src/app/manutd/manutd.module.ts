import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManutdPageRoutingModule } from './manutd-routing.module';

import { ManutdPage } from './manutd.page';
import {HttpClient} from '@angular/common/Http'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManutdPageRoutingModule
  ],
  declarations: [ManutdPage]
})
export class ManutdPageModule {}
