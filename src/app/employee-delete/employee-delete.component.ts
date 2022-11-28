import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent {

  employeeCode = ""

  deleteEmployee = () => {
    let data:any = {
      "employeeCode":this.employeeCode
    }
    console.log(data);
    
  }
}
