import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  model: NgbDateStruct;
  date: {year: number, month: number};
  ngOnInit() {
  }
  constructor(private calendar: NgbCalendar) {
  }
  selectToday() {
    this.model = this.calendar.getToday();
  }
  onClickSubmit(data) {
      console.log(data);
  }
}
