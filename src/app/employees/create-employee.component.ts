import { EmployeeService } from './employee.service';
import { Employee } from './../models/employee.model';
import { Department } from './../models/department.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Router }from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  datePickerConfig: Partial<BsDatepickerConfig>;
  previewPhoto = false;
  employee:Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: '',
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null
  }
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
  constructor(private _employService:EmployeeService,
              private _router:Router) {
      this.datePickerConfig = Object.assign({},{
      containerClass:'theme-dark-blue',
      showWeekNumbers:false,
      dateInputFormat:'DD/MM/YYYY'
    })
               }

  ngOnInit() {
  }
  saveEmployee():void{
    this._employService.save(this.employee);
    this._router.navigate(['list']);
  }
  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }
}
