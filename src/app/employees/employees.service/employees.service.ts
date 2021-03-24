import {Injectable} from '@angular/core';
import {Employee, Gender} from '../../models/employee.model';
import Department from '../../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private employees: Employee[] = [];

  // tslint:disable-next-line:typedef
  getAllEmployees() {
    return this.employees;
  }

  // tslint:disable-next-line:typedef
  getAllDepartments() {
    return [new Department('IT', 1), new Department('HR', 2), new Department('Marketing', 3)];
  }

  // tslint:disable-next-line:typedef
  addEmployee(employee: Employee) {
    this.employees.push(employee);
  }


}
