import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {
  data:any = [
  {
    "employeeCode":1000,
    "name":"hai",
    "designation":"Developer",
    "salary":100000,
    "phone" :9874563210,
    "mail":"kjk@mail.com",
    "company":"Nest",
    "year":3
  },
  {
    "employeeCode":1001,
    "name":"Ram",
    "designation":"Trainee",
    "salary":20000,
    "phone" :88974563210,
    "mail":"kjk@mail.com",
    "company":"SFO",
    "year":1
  },
  {
    "employeeCode":1002,
    "name":"May",
    "designation":"Doctor",
    "salary":250000,
    "phone" :9653210213,
    "mail":"kjk@mail.com",
    "company":"MIMS",
    "year":5
  },
  {
    "employeeCode":1003,
    "name":"Sonal",
    "designation":"Manager",
    "salary":35000,
    "phone" :7012345872,
    "mail":"kjk@mail.com",
    "company":"SFO",
    "year":3
  },
  {
    "employeeCode":1004,
    "name":"hai",
    "designation":"Lead Engineer",
    "salary":500000,
    "phone" :98998999,
    "mail":"kjk@mail.com",
    "company":"Nest",
    "year":15
  }
]

}
