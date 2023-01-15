import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Let's inject Http Dependency to make an API Calls
  constructor(private http:HttpClient) { }

  apilink:string="https://jsonplaceholder.typicode.com/users"

  //users array but its real time
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apilink);
  }
  getSingleUser(id:number):Observable<User>{
    return this.http.get<User>(this.apilink+"/"+id);
  }
  
  //normal calling api
  // getAllUsersData(){
  //   return this.http.get(this.apilink);
  // }
}
