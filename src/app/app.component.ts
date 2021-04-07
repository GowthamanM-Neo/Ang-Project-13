import { Component } from '@angular/core';
import { City } from 'src/model/city';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  database:any={};
  userName:any;
  users:any;
  countries:any;
  cities:any="empty";
  city:any = {};
  countryName:any;
  cityName:any;
  genderValue:any;
  constructor(private apiService:ApiService){
    this.apiService.getCountries().subscribe((data)=>{
      this.countries = data;
    });

    this.apiService.getUsers().subscribe((data)=>{
      this.database=data;
    })
  }
  async getCity(){
    this.city.country = this.countryName;
    
    this.apiService.getCities(this.city)
    .subscribe((data)=>{
      this.cities = data.data;
      console.log('data->'+this.cities);
    });
    
    return this.cities;
  }

  submit(){
    console.log(this.userName);
    console.log(this.database);
    this.users = this.database.filter((data: 
      { firstName: any;
        country:any;
        city:any;
        gender:any;
      }) => (data.firstName === this.userName || data.gender === this.genderValue));
    console.log(this.users);
  }
}
