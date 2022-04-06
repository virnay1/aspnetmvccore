import { Component, Inject, OnInit } from '@angular/core';
import { IEmployee } from '../i-employee';
import { EmployeeService } from '../employee.service';

@Inject(EmployeeService)
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:IEmployee[] = [];
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe((data:any)=>{
      let x = 0;
      for(x=0;x<data.length;x++){
        this.employees.push(
          {firstName:data[x].firstName,lastName:data[x].lastName, title:data[x].title });
      }
    });
  }

}
