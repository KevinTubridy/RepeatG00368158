import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiverpoolPageRoutingModule } from './liverpool-routing.module';

import { LiverpoolPage } from './liverpool.page';
import{LiverpoolplayersPageModule} from '../liverpoolplayers/liverpoolplayers.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiverpoolPageRoutingModule,
    LiverpoolplayersPageModule
  ],
  declarations: [LiverpoolPage]
})
export class LiverpoolPageModule {}
