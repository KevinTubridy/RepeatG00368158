import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-mancity',
  templateUrl: './mancity.page.html',
  styleUrls: ['./mancity.page.scss'],
})
export class MancityPage implements OnInit {

  constructor(private navCtrl:NavController) { }
  openFixturesPage(){
  this.navCtrl.navigateForward('/fixtures'); }
  
  ngOnInit() {
  }

}
