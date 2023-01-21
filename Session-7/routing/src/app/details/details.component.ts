import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  id:number=0;
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
      this.id=Number(this.route.snapshot.paramMap.get('id'));
  }
}
