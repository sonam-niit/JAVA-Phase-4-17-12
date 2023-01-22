import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  students:Student[]

  constructor(private service: StudentService){}

  ngOnInit(){
    this.service.getAllStudents().subscribe(data=>this.students=data);
  }
  ondelete(id:number){
    this.service.deleteStudent(id).subscribe(x=>console.log(x));
    this.students= this.students.filter((x)=> x.id !== id)
  }
}
