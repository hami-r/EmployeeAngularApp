import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {

  employeeCode = ""

  editEmployee = () => {
    let data:any = {
      "employeeCode":this.employeeCode
    }
    console.log(data);
    
  }
}
