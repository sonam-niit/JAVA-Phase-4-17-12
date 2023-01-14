import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm:FormGroup
  submitted:boolean=false //default the form is not submitted
  //injected formbuilder dependency in constructor to create a form 
  constructor(private builder:FormBuilder){}
  //loads when the component intialized
  ngOnInit():void{

    this.registerForm = this.builder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(8)]]
    })
  }
  get f(){
    return this.registerForm.controls
  }
  onsubmit():void{
    this.submitted=true;
    if(this.registerForm.invalid)
      return
    alert("Form Submitted successfully")
  }
}
