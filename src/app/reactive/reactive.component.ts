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
  address:{country:string;
  state:string;
  city:string;}
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
  city:string='City';

  states:any
  citys:any
 


  array: Array[] = [
    {
      id:'1',
      firstname: 'pratik',
      lastname: 'ghoghari',
      email: 'pratik@gmail.com',
      gender: 'male',
      phone: '990-40-677-22',
      address:{country:'india',
      state:'gujrat',
      city:'surat'}
    },
    {
      id:'2',
      firstname: 'raj',
      lastname: 'variya',
      email: 'raj@gmail.com',
      gender: 'india',
      phone: '990-80-522-22',
      address:{country:'india',
      state:'gujrat',
      city:'surat'}
    },
  ];


  countryList: any = [
    { id: 1, name: 'India' },
    {id:2,name:'japan'}
  ];

  stateList: any = [
    { id: 1, name: 'Gujarat', country: 1 },
    { id: 2, name: 'Maharastra', country: 1 },
    {id:3,name:'Hokkaido',country:2},
    {id:4,name:'Tohoku',country:2},
  ];

  cityList: any = [
    { id: 1, name: 'surat', state: 1 },
    { id: 2, name: 'Ahmedabad', state: 1 },
    { id: 3, name: 'Mumbai', state: 2 },
    { id: 4, name: 'nasik', state: 2 },
    {id:5,name:'Tokyp',state:3},
    {id:6,name:'Kyato',state:3},
    {id:7,name:'sapparo',state:3},
    {id:8,name:'kobe',state:4},
    {id:9,name:'nagoya',state:4},
    {id:10,name:'Osaka',state:4},
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
      address: this.formBuilder.group({
        country: this.formBuilder.control('', Validators.required),
        state: this.formBuilder.control('', Validators.required),
        city:this.formBuilder.control('', Validators.required),
      }),
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
  changeCountry(c:any){
    this.states = this.stateList.filter(
      (con: any) => con.country == c.target.value
    );
  }
  changeState(d:any){
    this.citys = this.cityList.filter(
      (con: any) => con.state == d.target.value
    );
  }
  datashow(signupForm: any) {
     const add = this.signupForm.value.address;
    const currentCountry = this.countryList.find(
      (country: any) => country.id == add.country
    ).name;
    const currentState = this.stateList.find(
      (state: any) => state.id == add.state
    ).name;
    const currentCity = this.cityList.find(
      (cit: any) => cit.id == add.city
    ).name;
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
          address: {
            country: currentCountry,
            state: currentState,
            city: currentCity,
          },
        };
      } else {
        const data = {
          id: this.array.length + 1,
          ...this.signupForm.value,
          address: {
            country: currentCountry,
            state: currentState,
            city: currentCity,
          },
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
