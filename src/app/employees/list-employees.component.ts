import { EmployeeService } from './employee.service';
import { Employee } from './../models/employee.model';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees:Employee[]=[];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

}
