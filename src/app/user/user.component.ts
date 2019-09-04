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
    console.log(this.apiService.postUser({
      name: "Octavio",
      lastname: "Cárdenas",
      birthdate: "09/01/2019",
      contactNumber: "123456",
      address: "address 1",
      email: "ocardenas@subtel.cl",
      country: "Chile"
    }));
  }
}
