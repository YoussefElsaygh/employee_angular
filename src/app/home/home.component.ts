import {Component} from '@angular/core';
import {Employee} from '../models/employee.model';
import {EmployeesService} from '../employees/employees.service/employees.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  employees: Employee[];

  constructor(private service: EmployeesService) {
    this.employees = service.getAllEmployees();
  }

  addEmployee($event: Employee) {
    this.service.addEmployee($event);
  }
}
