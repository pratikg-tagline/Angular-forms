import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

interface Array {
  id:string;
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  phone: string;
  country:string;
  state:string;
  city:string;
}
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss'],
})
export class ReactiveComponent implements OnInit {
  signupForm!: FormGroup;
  data: any;
  firstname: string = 'Firstname';
  lastname: string = 'Lastname';
  email: string = 'Email';
  gender: string = 'Gender';
  phone: string = 'Phone';
  userId!: number;
  edit: string = 'Edit';
  delete: string = 'Delete';
  country:string='Country'
  state:string='State';
  city:string='City'


  array: Array[] = [
    {
      id:'1',
      firstname: 'pratik',
      lastname: 'ghoghari',
      email: 'pratik@gmail.com',
      gender: 'male',
      phone: '990-40-677-22',
      country:'india',
      state:'gujrat',
      city:'surat'
    },
    {
      id:'2',
      firstname: 'raj',
      lastname: 'variya',
      email: 'raj@gmail.com',
      gender: 'india',
      phone: '990-80-522-22',
      country:'india',
      state:'gujrat',
      city:'surat'
    },
  ];




  myForm: any;
  submit: string = 'Submit';

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstname: this.formBuilder.control('', Validators.required),
      lastname: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', Validators.required),
      gender: this.formBuilder.control('', Validators.required),
      phone: this.formBuilder.control('', Validators.required),
    });
  }

  get errorshow() {
    return this.signupForm.controls;
  }

  BookDelete(data: number) {
    this.array.splice(data, 1);
  }
  editdata(data: any) {
     this.userId = data.id;
    this.submit = 'Update';
    console.log(data.id);
    this.signupForm.patchValue(data);
    console.log('data :>> ', data);
  }

  datashow(signupForm: any) {
    if (this.signupForm.invalid) {
      return;
    } else {
      this.submit = 'Submit';

      if (this.userId) {
        const index: number = this.array.findIndex(
          (res: any) => res.id === this.userId
        );
        this.array[index] = {
          ...this.signupForm.value,
        };
      } else {
        const data = {
          id: this.array.length + 1,
          ...this.signupForm.value,
        };
      

      console.log('this.array :>> ', this.array);
      this.array.push(data);
      console.log('data :>> ', this.array);
    }
    this.userId = 0;
    this.signupForm.reset();
    console.log('this.reactiveForm.value :>> ', this.signupForm);
  }
}
  // postData(signupForm:any):void{
  //   this.data=this.signupForm.value
  //     console.log(this.data)

  //  if(this.signupForm.invalid){
  //      return;
  //  }else{
  //   // this.signupForm.push(this.signupForm.value);
  //   // console.log('data :>> ', this.array);
  //   this.data=this.signupForm.value
  //   console.log(this.data)
  //  }
  // this.lastname=signupForm.lname.value;
  // this.email=signupForm.email.value;
  // this.male=signupForm.male.value;
  // this.female=signupForm.female.value;
  // this.phone=signupForm.phone.value
}
