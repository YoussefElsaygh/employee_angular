import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Department from '../../../models/department.model';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import {Employee} from '../../../models/employee.model';
import {EmployeesService} from '../../employees.service/employees.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {

  departments: Department[];
  filteredEmployees: Employee[] = [];
  isSearched = false;

  constructor(private service: EmployeesService) {
    this.departments = service.getAllDepartments();
  }

  // tslint:disable-next-line:typedef
  searchEmployee(f: NgForm) {
    const form = f.form.value;
    const name: string = form.employeeName;
    const department: Department = form.employeeDepartment;
    this.filteredEmployees = this.service.searchEmployee(name, department);
    this.isSearched = true;
    f.resetForm();
  }

}
