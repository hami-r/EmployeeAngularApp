import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
    
  employeeCode = ""
  name = ""
  designation = ""
  salary = ""
  phone = ""
  mail = ""
  company = ""
  year = ""

  readValues = () => {
    let data = {
      "employeeCode":this.employeeCode,
      "name":this.name,
      "designation":this.designation,
      "salary":this.salary,
      "phone" :this.phone,
      "mail":this.mail,
      "company":this.company,
      "year":this.year
    }
    console.log(data)
  }

  
  
  
  
}
