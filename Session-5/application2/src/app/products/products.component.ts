import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products=[
    {id:1,name:"Pencil",available:"20-01-2023",price:5,rating:4.5},
    {id:2,name:"Pen",available:"26-01-2023",price:10,rating:4.7},
    {id:3,name:"Eraser",available:"20-02-2023",price:3,rating:4.2},
    {id:4,name:"Scale",available:"29-01-2023",price:15,rating:4.1}
  ]
}
