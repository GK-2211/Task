import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './interface/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  createUser(data: any) :  Observable<any>{
    return this.http.post("https://reqres.in/api/users",data);
  }
  
  getUser() : Observable<User[]>{
    return this.http.get<User[]>("https://reqres.in/api/users");
  }
  constructor(public http : HttpClient) { }
}
