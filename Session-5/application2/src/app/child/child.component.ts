import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:['pdata'],
  outputs:['cevent']
})
export class ChildComponent {

  pdata:string=""
  //to emit the value entered by user I want event emitter
  cevent= new EventEmitter<string>()
  onchange(value:string){
    this.cevent.emit(value)
  }
}
