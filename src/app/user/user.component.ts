import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  ngOnInit() {
  }
  constructor(private calendar: NgbCalendar) {
  }
  onClickSubmit(data) {
      console.log(data);
  }
}
