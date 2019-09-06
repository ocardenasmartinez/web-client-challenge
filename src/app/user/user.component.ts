import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private apiService: ApiService) {}

  onClickSubmit(data) {
      this.apiService.postUser({
      name: data.name,
      lastname: data.lastName,
      birthdate: data.birthday,
      contactNumber: data.contactnumber,
      address: data.address,
      email: data.email,
      country: data.country
    }).subscribe(data => {
      console.log(data);
    })
  }

}
