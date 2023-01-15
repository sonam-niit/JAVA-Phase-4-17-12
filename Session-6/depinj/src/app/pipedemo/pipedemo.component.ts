import { Component } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent {

  name:string="sonam soni"
  message:string="GOOD MORNING"
  pi:number=3.1415927
  a=0.12345
  b=12345.6789
  today=new Date();
  object={name:"sonam",
  email:"sonam@gmail.com"}
}
