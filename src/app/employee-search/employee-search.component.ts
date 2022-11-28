import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent {

  employeeCode = ""

  searchEmployee = () => {
    let data:any = {
      "employeeCode":this.employeeCode
    }
    console.log(data);
    
  }
}
