import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const url = 'http://localhost:9001/saveuser';

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  postUser(data) {
    return this.httpClient.post(
        url,
        JSON.stringify(data),
        httpOptions)
      .subscribe(response => {
        console.log(response);
      });
  }

}
