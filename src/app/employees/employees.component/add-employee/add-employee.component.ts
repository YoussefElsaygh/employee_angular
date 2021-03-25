import {Component, EventEmitter, Output} from '@angular/core';
import {EmployeesService} from '../../employees.service/employees.service';
import Department from '../../../models/department.model';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import {Birthday, Employee, Gender} from '../../../models/employee.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  departments: Department[];
  date: NgbDate;
  newEmployee: Employee;
  @Output() onEmployeeAdded = new EventEmitter();

  constructor(service: EmployeesService) {
    this.departments = service.getAllDepartments();
  }


  addEmployee(f: NgForm) {
    let form = f.form.value;
    this.newEmployee = new Employee(form.employeeName,
      form.employeeCode,
      form.employeeDepartment,
      form.employeeGender,
      new Birthday(form.birthday.year, form.birthday.month, form.birthday.day));
    this.onEmployeeAdded.emit(this.newEmployee);
    f.resetForm();
  }

}
