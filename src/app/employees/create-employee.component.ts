import { Employee } from './../models/employee.model';
import { Department } from './../models/department.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


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
  constructor() { }

  ngOnInit() {
    this.datePickerConfig = Object.assign({},{
      containerClass:'theme-dark-blue',
      showWeekNumbers:false,
      dateInputFormat:'DD/MM/YYYY'
    })
  }
  saveEmployee(empForm:NgForm):void{
    console.log(empForm.value)
  }
  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }
}
