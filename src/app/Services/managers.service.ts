import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ManagersService {

  constructor(private http:HttpClient) { }

  GetManagersData():Observable<any>{
    return this.http.get('https://jsonblob.com/api/jsonblob/57895b7d-0125-11ec-91b6-2d44f0738779');
  }
}
