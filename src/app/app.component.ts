import {Component} from '@angular/core';
import {Employee} from './models/employee.model';
import {EmployeesService} from './employees/employees.service/employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employees';

}
