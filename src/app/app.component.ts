import { Component, OnInit } from '@angular/core';
import { ManagersService }  from './Services/managers.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  managers:any[];
  constructor(private service:ManagersService){

  }
  ngOnInit(){
      this.service.GetManagersData().subscribe( (data)=>{
      this.managers = data.managers;
      console.log(this.managers);
      } );
  }
}
