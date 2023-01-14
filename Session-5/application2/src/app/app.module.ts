import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DatainteractionComponent } from './datainteraction/datainteraction.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatainteractionComponent,
    ProductsComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
