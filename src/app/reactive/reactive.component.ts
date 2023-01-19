import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CityList, Countrylist, StateList, View } from '../common';


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
  gender: string = 'Gender :';
  phone: string = 'Phone';
  userId!: number;
  edit: string = 'Edit';
  delete: string = 'Delete';
  country: string = 'Country';
  state: string = 'State';
  city: string = 'City';
  enteryourphonenumber:string='Enter your phone number:'
  reactiveforms:string='Reactive Forms'
  firstnamerequired:string='Firstname Required'
  lastnamerequired:string='Lastname Required'
  emailrequired:string='Email Required'
  male:string='Male'
  female:string='Female'  
  phonerequired:string='Phone Required'
  selectcountry:string='Select Country'
  selectstate:string='Select State'
  selectcity:string='Select City'
  forms:string='Forms:'
  states: any;
  citys: any;
  array:View[] = [
    {
      id: '1',
      firstname: 'pratik',
      lastname: 'ghoghari',
      email: 'pratik@gmail.com',
      gender: 'male',
      phone: '990-40-677-22',
      address: { country: 'India', state: 'Gujarat', city: 'Surat' },
    },
    {
      id: '2',
      firstname: 'raj',
      lastname: 'variya',
      email: 'raj@gmail.com',
      gender: 'india',
      phone: '990-80-522-22',
      address: { country: 'India', state: 'Gujarat', city: 'Surat' },
    },
  ];

  countryList: Countrylist[] = [
    { id: '1', name: 'India' },
    { id: '2', name: 'japan' },
  ];

  stateList: StateList[] = [
    { id: '1', name: 'Gujarat', countryId: '1' },
    { id: '2', name: 'Maharastra', countryId: '1' },
    { id: '3', name: 'Hokkaido', countryId: '2' },
    { id: '4', name: 'Tohoku', countryId: '2' },
    { id: '5', name: 'Punjab', countryId: '1' },
    { id: '6', name: 'Karnataka', countryId: '1' },
    { id: '7', name: 'Uttar Pradesh', countryId: '1' },
    { id: '8', name: 'Madhya Pradesh', countryId: '1' },
    { id: '9', name: 'Kanto', countryId: '2' },
    { id: '10', name: 'Chubu', countryId: '2' },
    { id: '11', name: 'Kinki', countryId: '2' },
    { id: '12', name: 'Chugoku', countryId: '2' },
  ];

  cityList: CityList[] = [
    { id: '1', name: 'surat', stateId: '1' },
    { id: '2', name: 'Ahmedabad', stateId: '1' },
    { id: '3', name: 'Mumbai', stateId: '2' },
    { id: '4', name: 'nasik', stateId: '1' },
    { id: '5', name: 'Tokyp', stateId: '3' },
    { id: '6', name: 'Kyato', stateId: '3' },
    { id: '7', name: 'sapparo', stateId: '3' },
    { id: '8', name: 'kobe', stateId: '4' },
    { id: '9', name: 'nagoya', stateId: '4' },
    { id: '10', name: 'Yokohama', stateId: '4' },
    { id: '11', name: 'Sendai', stateId: '4' },
    { id: '12', name: 'Kobe', stateId: '4' },
    { id: '13', name: 'Nara', stateId: '9' },
    { id: '14', name: 'Saitama', stateId: '9' },
    { id: '15', name: 'Kawasaki', stateId: '9' },
    { id: '16', name: 'Aomori', stateId: '9' },
    { id: '17', name: 'Kitakyushu', stateId: '9' },
    { id: '18', name: 'Chiba', stateId: '9' },
    { id: '19', name: 'Takamatsu', stateId: '10' },
    { id: '20', name: 'Niigata', stateId: '10' },
    { id: '21', name: 'Maebashi', stateId: '10' },
    { id: '22', name: 'Morioka', stateId: '10' },
    { id: '23', name: 'Iwaki', stateId: '10' },
    { id: '24', name: 'Yokkaichi', stateId: '11' },
    { id: '25', name: 'Nagano', stateId: '11' },
    { id: '26', name: 'Kurume', stateId: '11' },
    { id: '27', name: 'Okazaki', stateId: '11' },
    { id: '28', name: 'Kakogawa', stateId: '11' },
    { id: '29', name: 'Takasaki', stateId: '12' },
    { id: '30', name: 'Otaru', stateId: '12' },
    { id: '31', name: 'Ichinomiya', stateId: '12' },
    { id: '32', name: 'Beppu', stateId: '12' },
    { id: '33', name: 'Hamamatsu', stateId: '12' },
    { id: '34', name: 'Ludhiana', stateId: '5' },
    { id: '35', name: 'Amritsar', stateId: '5' },
    { id: '36', name: 'Jalandhar', stateId: '5' },
    { id: '37', name: 'Kapurthala', stateId: '5' },
    { id: '38', name: 'Patiala', stateId: '5' },
    { id: '39', name: 'Bengaluru', stateId: '6' },
    { id: '40', name: 'Mangaluru', stateId: '6' },
    { id: '41', name: 'Shivamogga', stateId: '6' },
    { id: '42', name: 'Kalaburagi', stateId: '6' },
    { id: '43', name: 'Belagavi', stateId: '6' },
    { id: '44', name: 'Lucknow', stateId: '7' },
    { id: '45', name: 'Kanpur', stateId: '7' },
    { id: '46', name: 'Varanasi', stateId: '7' },
    { id: '47', name: 'Prayagraj', stateId: '7' },
    { id: '48', name: 'Ujjain', stateId: '8' },
    { id: '49', name: 'Gwalior', stateId: '8' },
    { id: '50', name: 'Chhindwara', stateId: '8' },



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
        city: this.formBuilder.control('', Validators.required),
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
   // console.log('userId :>> ', this.userId);
    this.submit = 'Update';
    //console.log(data.id);
    this.signupForm.patchValue(data);
    //console.log('data :>> ', data);
  }
  changeCountry(c: any) {
    this.states = this.stateList.filter(
      (con: StateList) => con.countryId == c.target.value
    );
  }
  changeState(d: any) {
    this.citys = this.cityList.filter(
      (con: CityList) => con.stateId == d.target.value
    );
  }
  datashow(signupForm: any) {
    const add = this.signupForm.value.address;
    //console.log('add :>> ', add); 
    const currentCountry = this.countryList.find(
      (couy: Countrylist) => couy.id == add.country
    )?.name;

    const currentState = this.stateList.find(
      (state: StateList) => state.id == add.state
    )?.name;
    const currentCity = this.cityList.find(
      (city: CityList) => city.id == add.city
    )?.name;
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

       // console.log('this.array :>> ', this.array);
        this.array.push(data);
        //console.log('data :>> ', this.array);
      }
      this.userId = 0;
      this.signupForm.reset();
     // console.log('this.reactiveForm.value :>> ', this.signupForm);
    }
  }

  
}
