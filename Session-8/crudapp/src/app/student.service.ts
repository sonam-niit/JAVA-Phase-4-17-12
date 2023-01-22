import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl:string= "http://localhost:3000/students";

  constructor(private http: HttpClient) { }

  getAllStudents():Observable<Student[]>{
    return this.http.get<Student[]>(this.baseUrl);
  }
  getById(id:number):Observable<Student>{
    return this.http.get<Student>(this.baseUrl+"/"+id)
  }
  addStudent(obj:Student){
    return this.http.post(this.baseUrl,obj);
  }
  updateStudent(obj:Student,id:number){
    return this.http.put(this.baseUrl+"/"+id,obj)
  }
  deleteStudent(id:number){
    return this.http.delete(this.baseUrl+"/"+id)
  }
}
