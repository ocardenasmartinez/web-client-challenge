import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Status } from './status'

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const url = 'http://localhost:9001/saveuser';

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public postUser(data): Observable<Status> {
    return this.httpClient.post<Status>(url, JSON.stringify(data), httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
    } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
