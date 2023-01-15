import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

//Decorator
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

  list:User[]
  //injected the service dependency in Component
  constructor(private service: UserService){ }

  ngOnInit(){
    this.service.getAllUsers().subscribe(x=>this.list=x)
    //when you call this method it is returning observable so you need to
    //subscribe the data and the received data store it in a variable list
  }
}
