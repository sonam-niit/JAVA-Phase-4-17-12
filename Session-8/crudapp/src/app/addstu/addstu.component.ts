import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-addstu',
  templateUrl: './addstu.component.html',
  styleUrls: ['./addstu.component.css']
})
export class AddstuComponent {

  student:Student= new Student();

  constructor(private service:StudentService, private router:Router){}
  onSubmit(){
      this.service.addStudent(this.student).subscribe(x=>console.log(x));
      alert("Data Submitted Successfully")
      this.router.navigate(['list'])
  }
}
