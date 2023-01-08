import { NgModule } from '@angular/core';
import { MylibComponent } from './mylib.component';
import { Comp1Component } from './comp1/comp1.component';



@NgModule({
  declarations: [
    MylibComponent,
    Comp1Component
  ],
  imports: [
  ],
  exports: [
    MylibComponent
  ]
})
export class MylibModule { }
