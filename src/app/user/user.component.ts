import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor
    (private apiService: ApiService,
    private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      birthday: ['', Validators.required],
      email: ['', Validators.required],
      contactnumber: ['', Validators.required],
      address: ['', Validators.required],
      country: ['', Validators.requiredTrue]
    });
  }

  get f() { return this.registerForm.controls; }

  onClickSubmit(data) {

    this.submitted = true;
    if (this.registerForm.invalid) return false;

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
