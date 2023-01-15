import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserService } from './user.service';
import { Highlight } from './highlight';
import { ColorChange } from './colorchange';
import { SwitchdemoComponent } from './switchdemo/switchdemo.component';
import { FormsModule } from '@angular/forms';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { FormatText } from './pipes/formattext';
import { CustompipeComponent } from './custompipe/custompipe.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    Highlight,
    ColorChange,
    SwitchdemoComponent,
    PipedemoComponent,
    FormatText,
    CustompipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
