import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {
signupForm: FormGroup;
data:any
firstname:string=''
lastname:string=''
email:string=''
male:string=''
female:string=''
phone:string=''


  defultcountry='india';
 
  constructor(private frmbuilder:FormBuilder) { 
    this.signupForm=frmbuilder.group({
      fname:new FormControl(''),
      lname:new FormControl(''),
      email:new FormControl(''),
      male:new FormControl(''),
      female:new FormControl(''),
      phone:new FormControl(''),


    })
  }

  ngOnInit(): void {
  }
postData(signupForm:any){
  this.firstname=signupForm.fname;
  // this.lastname=signupForm.lname.value;
  // this.email=signupForm.email.value;
  // this.male=signupForm.male.value;
  // this.female=signupForm.female.value;
  // this.phone=signupForm.phone.value;
  console.log(this.firstname);
this.data=this.signupForm.value
console.log(this.data)
}
}
