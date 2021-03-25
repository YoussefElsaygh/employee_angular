import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeesService} from './employees/employees.service/employees.service';
import {AddEmployeeComponent} from './employees/employees.component/add-employee/add-employee.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarComponent} from './ui/navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {SearchEmployeeComponent} from './employees/employees.component/search-employee/search-employee.component';
import {HomeComponent} from './home/home.component';
import {SidebarComponent} from './ui/sidebar/sidebar.component';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [

    AppComponent,
    AddEmployeeComponent,
    NavbarComponent,
    SearchEmployeeComponent,
    HomeComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'add', component: HomeComponent},
      {path: 'search', component: SearchEmployeeComponent}
    ]),
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [
    EmployeesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
