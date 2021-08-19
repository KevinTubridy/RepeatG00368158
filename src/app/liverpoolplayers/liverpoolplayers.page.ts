import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liverpoolplayers',
  templateUrl: './liverpoolplayers.page.html',
  styleUrls: ['./liverpoolplayers.page.scss'],
})
export class LiverpoolplayersPage implements OnInit {
  players: string[] = ["Carlow", "Dublin", "Kildare",
  "Kilkenny", "Laois", "Longford", "Louth", "Meath",
  "Offaly", "Westmeath", "Wexford", "Wicklow"];
  constructor() { }

  ngOnInit() {
  }

}
