import { Component } from '@angular/core';

@Component({
  selector: 'app-datainteraction',
  templateUrl: './datainteraction.component.html',
  styleUrls: ['./datainteraction.component.css']
})
export class DatainteractionComponent {

    link:string="https://www.google.com"
    target:string="_blank"
    imgurl:string="./assets/images/nature.jpg"
    h:number=300
    w:number=500

    message:string="Welcome to interpolation"
}
