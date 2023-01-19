export interface View {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    gender: string;
    phone: string;
    address: { country: string; state: string; city: string };
  }
  export interface Countrylist{
    id:string;
    name:string;
  }
  export interface StateList{
    id:string;
    name:string;
    countryId:string;
  }
  export interface CityList{
    id:string;
    name:string;
    stateId:string;
  }
