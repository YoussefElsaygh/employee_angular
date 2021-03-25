import {Injectable} from '@angular/core';
import {Birthday, Employee, Gender} from '../../models/employee.model';
import Department from '../../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private employees: Employee[] = [new Employee('Youssef', 1, new Department('IT', 1), Gender.male, new Birthday('1994', '8', '11'))];

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

  // tslint:disable-next-line:typedef
  searchEmployee(name: string, department: Department) {
    return this.employees.filter((employee, idx, arr) => employee.employeeName === name && employee.department.id === department.id);

  }


}
