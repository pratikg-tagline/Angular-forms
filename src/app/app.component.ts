import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-forms';
  form:any
  
  onsubmit(form:NgForm){
    console.log(form)
  }
  defultcountry='india';
  firstname:string | undefined
  lastname:string | undefined
  email:any
}
