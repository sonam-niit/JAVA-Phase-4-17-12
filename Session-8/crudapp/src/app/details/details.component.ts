import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  obj:Student;
  constructor(private service:StudentService, private route:ActivatedRoute){}
  ngOnInit(){
    const id= Number(this.route.snapshot.paramMap.get('id'));
    this.service.getById(id).subscribe(data=> this.obj=data)
  }
}
