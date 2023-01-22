import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstuComponent } from './addstu/addstu.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'list',component:ListComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'add',component:AddstuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
