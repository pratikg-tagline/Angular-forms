import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-forms';
  form:any;
  data:any;

  array:any=[

    { id:1,
      firstname:'pratik',
    lastname:'ghoghari',
     email:'pratik@gmail.com',
     country:'india',
     subject:'xyz'
    },{
      id:2,
      firstname:'raj',
    lastname:'variya',
     email:'raj@gmail.com',
     country:'india',
     subject:'abc'
    }
]
 @ViewChild ('myForm') myForm!:NgForm

  onsubmit(form:NgForm){
    console.log(form)
  }
  datashow(myForm:any){
    this.array.push(this.myForm.value);
    console.log('data :>> ', this.array);
  }
 
  defultcountry='india';
  firstname:string | undefined
  lastname:string | undefined
  email:any

  BookDelete(data: number){
    this.array.splice(data,1);
  }
}
